const request = require("supertest");
const app = require("../app");

// Run using npx jest
describe("GET /", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello World" });
  });
});

describe("POST /register", () => {
  it("should register a user successfully", async () => {
    const res = await request(app).post("/register").send({
      username: "testuser",
      email: "testuser@example.com",
      password: "password123",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({
      message: "User registered successfully",
      user: {
        username: "testuser",
        email: "testuser@example.com",
        password: "password123",
      },
    });
  });
});
