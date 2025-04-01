import { faker, fakerES } from "@faker-js/faker";


export const generatePetsMocks = (amount) => {
    const pets = [];

    for (let i = 0; i < amount; i ++ ){
        const pet ={
            name: faker.person.firstName(),
            specie: faker.helpers.arrayElement(["Perro", "Gato", "Conejo", "Oso", "Pajaro","Carpincho"]),
            birthDate: faker.date.past({years: 5 }),
            image: faker.image.urlLoremFlickr({category: "animals"}),
        } ;
        pets.push(pet);
    } 
    return pets;
};