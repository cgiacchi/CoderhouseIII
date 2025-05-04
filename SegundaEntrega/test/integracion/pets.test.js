import { expect } from "chai";
import supertest from "supertest";

const request = supertest("http://localhost:8080");

describe("Test de integración módulo Pets", () => {
  let petTest;

  it("[POST] /api/pets - Debe registrar una mascota", async () => {
    const newPet = {
      name: "Chuño",
      specie: "Gato",
      birthDate: "10-12-2020",
      image: "123.jpg",
    };

    const { status, body, error } = await request.post("/api/pets").send(newPet);
    if(error){
      console.log("Error: ", error);
    }
    petTest = body;

    expect(status).to.be.equal(201);
    expect(body).to.have.property("_id");
    expect(body).to.have.property("name");
    expect(body).to.have.property("specie");
    expect(body).to.have.property("image");
    expect(body.name).to.be.equal("Chuño");
    expect(body.specie).to.be.equal("Gato");
    expect(body.birthDate).to.be.equal("2024-11-01T03:00:00.000Z");
  });

  it("[PUT] /api/pets/:id - Debe actualizar una mascota", async () => {
    const data = {
      name: "Chuño",
      specie: "Perro",
    };

    const { status, body, error } = await request.put(`/api/pets/${petTest._id}`).send(data);
    

    expect(status).to.be.equal(200);
    expect(body).to.have.property("_id");
    expect(body).to.have.property("name");
    expect(body).to.have.property("specie");
    expect(body).to.have.property("image");
    expect(body.name).to.be.equal("Chuño");
    expect(body.specie).to.not.be.equal("Gato");
    expect(body.specie).to.be.equal("Perro");
    expect(body.birthDate).to.be.equal("2024-11-02T03:00:00.000Z");
  });

  it("[GET] /api/pets/:id - Debe obtener una mascota", async () => {
    
    const { status, body, error } = await request.get(`/api/pets/${petTest._id}`);

    expect(status).to.be.equal(200);
    expect(body).to.have.property("_id");
    expect(body).to.have.property("name");
    expect(body).to.have.property("specie");
    expect(body).to.have.property("image");
    expect(body.name).to.be.equal("Felix");
    expect(body.specie).to.not.be.equal("Gato");
    expect(body.specie).to.be.equal("Perro");
    expect(body.birthDate).to.be.equal("2024-11-02T03:00:00.000Z");
  });

  after(async () => {
    try {
      await request.delete(`/api/pets/${petTest._id}`);
    } catch (error) {
      console.log(error);
    }
  });
});