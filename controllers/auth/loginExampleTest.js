// const { user } = require("../../db");
// const { unauthorized } = require("http-errors");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const { secret_key } = process.env;

// describe("login()", () => {
//   let user, password, email, token, hashpassword;
//   beforeEach(() => {
//     user = {
//       id: 1,
//       email: "example@example.com",
//       password: "abcd1234",
//       subscription: "gold",
//     };
//     hashpassword = bcrypt.hashSync(user.password);
//     password = "abcd1234";
//     email = "example@example.com";
//     token = jwt.sign({ id: user.id }, secret_key);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should return 200 and token when valid credentials are provided", async () => {
//     const req = {
//       body: { password, email },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//     await user.findone.mockResolvedValue(user);
//     await bcrypt.compareSync.mockResolvedValue(true);
//     await user.findbyidandupdate.mockResolvedValue();

//     await login(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({
//       status: "ok",
//       code: 200,
//       token,
//       user: {
//         email,
//         user: user.subscription,
//       },
//     });
//   });

//   it("should return 401 when user email is not found", async () => {
//     const req = {
//       body: { password, email },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//     await user.findone.mockResolvedValue(null);

//     await login(req, res);

//     expect(res.status).toHaveBeenCalledWith(401);
//     expect(res.json).toHaveBeenCalledWith({
//       status: "unauthorized",
//       code: 401,
//       message: `email ${email} not found`,
//     });
//   });

//   it("should return 401 when wrong password is provided", async () => {
//     const req = {
//       body: { password, email },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//     await user.findone.mockResolvedValue(user);
//     await bcrypt.compareSync.mockResolvedValue(false);

//     await login(req, res);

//     expect(res.status).toHaveBeenCalledWith(401);
//     expect(res.json).toHaveBeenCalledWith({
//       status: "unauthorized",
//       code: 401,
//       message: "password wrong",
//     });
//   });

//   it("should return 500 when server error occurs", async () => {
//     const req = {
//       body: { password, email },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//     await user.findone.mockRejectedValue(new Error("server error"));

//     await login(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({
//       status: "error",
//       code: 500,
//       message: "server error",
//     });
//   });
// });
