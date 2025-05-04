import { faker } from "@faker-js/faker";
import { createHash } from "../utils/hashPassword.js";

class MockingService {
  async generateMockingPets(amount = 100) {
  const pets = [];
  for (let i = 0; i < amount; i++) {
    pets.push({
      name: faker.person.firstName(),
      specie: faker.helpers.arrayElement(["Perro", "Gato", "Conejo", "Oso", "Pájaro", "Carpincho"]),
      birthDate: faker.date.past({ years: 5 }),
      image: faker.image.urlLoremFlickr({ category: "animals" }),
      adopted: false
    });
  }
    return pets;
  }

async generateMockingUsers(amount = 50) {
  const users = [];
  const hashedPassword = createHash("123456"); 
  for (let i = 0; i < amount; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: faker.helpers.arrayElement(["user", "admin"]), 
      pets: [] 
    });
  }
  return users;
}

}

export default MockingService;