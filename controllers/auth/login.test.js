// // const express = require("express");
// // const request = require("supertest");
// // const { login } = require("./login");
// // const { describe, expect, test } = require("@jest/globals");
// // const { userSchemes } = require("../../schemas");
// // const { joiRLoginSchema } = userSchemes;

// // const app = express();

// // app.post("/users/login", joiRLoginSchema, login);

// // describe("test login controller", () => {
// //   beforeAll(() => app.listen(3000));
// //   //   afterAll(() => app.close());

// //   test("login return token", async () => {
// //     const response = await request(app).post("/users/login");
// //     // console.log(response);
// //     expect(response.status).toBe(400);
// //   });
// // });

// // =======================================================================================
// // =======================================================================================
// // =======================================================================================

// const { user } = require("../../db");
// const { unauthorized } = require("http-errors");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const secret_key = "dfgdfhtrjgfhf";
// const { login } = require("./login");

// describe("Login", () => {
//   let result;
//   let user;
//   let userFindOneStub;
//   let userFindByIdAndUpdateStub;
//   let bcryptCompareSyncStub;
//   let jwtSignStub;
//   jest.setTimeout(100000);

//   beforeEach(() => {
//     result = {
//       status: jest.fn(() => result),
//       json: jest.fn(() => result),
//     };

//     user = {
//       id: "user-id",
//       password: "password-hash",
//       subscription: "admin",
//       findOne: jest.fn(),
//       findByIdAndUpdate: jest.fn(),
//     };

//     userFindOneStub = jest
//       .spyOn(user, "findOne")
//       .mockImplementation(() => user);

//     userFindByIdAndUpdateStub = jest
//       .spyOn(user, "findByIdAndUpdate")
//       .mockImplementation(() => user);

//     bcryptCompareSyncStub = jest
//       .spyOn(bcrypt, "compareSync")
//       .mockImplementation(() => true);

//     jwtSignStub = jest.spyOn(jwt, "sign").mockImplementation(() => "token");
//   });

//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   it("should return a status code of 200", async () => {
//     const req = { body: { password: "password", email: "email" } };
//     await login(req, result);

//     expect(result.status).toHaveBeenCalledWith(200);
//   });

//   it("should return a token in the response", async () => {
//     const req = { body: { password: "password", email: "email" } };
//     await login(req, result);

//     expect(result.json).toHaveBeenCalledWith({
//       status: "ok",
//       code: 200,
//       token: "token",
//       user: {
//         email: "email",
//         user: "admin",
//       },
//     });
//   });

//   it("should throw an unauthorized error when email not found", async () => {
//     userFindOneStub.mockImplementationOnce(() => null);

//     const req = { body: { password: "password", email: "email" } };
//     await login(req, result);

//     expect(result.status).toHaveBeenCalledWith(401);
//     expect(result.json).toHaveBeenCalledWith({
//       status: "unauthorized",
//       code: 401,
//       message: `email email not found`,
//     });
//   });

//   it("should throw an unauthorized error when password wrong", async () => {
//     bcryptCompareSyncStub.mockImplementationOnce(() => false);

//     const req = { body: { password: "password", email: "email" } };
//     await login(req, result);

//     expect(result.status).toHaveBeenCalledWith(401);
//     expect(result.json).toHaveBeenCalledWith({
//       status: "unauthorized",
//       code: 401,
//       message: "password wrong",
//     });
//   });
// });
