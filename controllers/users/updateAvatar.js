const { User } = require("../../DB");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

async function updateAvatar(req, res) {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imageName = `${id}_${originalname}`;
  try {
    const resultUpload = path.join(avatarDir, imageName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", imageName);

    Jimp.read(avatarURL, (err, image) => {
      if (err) throw err;
      image
        .resize(250, 250) // resize
        .quality(70) // set JPEG quality
        // .greyscale() // set greyscale
        .write(avatarURL); // save
    });

    await User.findByIdAndUpdate(req.user._id, { avatarURL });

    res.status(200).json({
      status: "success",
      code: 200,
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
}

module.exports = {
  updateAvatar,
};
