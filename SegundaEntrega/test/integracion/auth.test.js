import { expect } from "chai";
import supertest from "supertest";
import { isValidPassword } from "../../src/common/utils/hashPassword.js";

// Request que apunta al servidor
const request = supertest("http://localhost:8080");

describe("Test de integración módulo Auth", () => {
  let userTest;

  it("[POST] /api/auth/register - Debe registrar un usuario", async () => {
    const newUser = {
      first_name: "Carolina",
      last_name: "Giacchi",
      email: "cg@gmail.com",
      password: "123456",
    };

    const { status, body, error } = await request.post("/api/auth/register").send(newUser);
    const checkPassword = isValidPassword(body, newUser.password);
    userTest = body;

    expect(status).to.be.equal(201);
    expect(body.first_name).to.be.equal("Carolina");
    expect(body.last_name).to.be.equal("Giacchi");
    expect(body.email).to.be.equal("cg@gmail.com");
    expect(body.password).to.not.be.equal("123456"); // ????
    expect(checkPassword).to.be.equal(true);
    expect(body).to.be.an("object");
  });

  it("[POST] /api/auth/login - Debe loguear un usuario", async () => {
    const data = {
      email: "cg@gmail.com",
      password: "123456",
    };

    const { status, body, error } = await request.post("/api/auth/login").send(data);
    const { user } = body;
    expect(status).to.be.equal(200);
    expect(user.first_name).to.be.equal("Carolina");
    expect(user.last_name).to.be.equal("Giacchi");
    expect(user.email).to.be.equal("cg@gmail.com");
    expect(user.password).to.not.be.equal("123456");
    expect(body.token).to.be.an("string");
  });

  after(async () => {
    try {
      
      await request.delete(`/api/users/${userTest._id}`);
    } catch (error) {
      console.log(error);
    }

  });
});