import swaggerJsDoc from "swagger-jsdoc";
import { userPaths } from "../modules/users/user.path.js";
import { userDocSchema } from "../modules/users/user.schema.js";
import { petPaths } from "../modules/pets/pet.path.js";
import { petDocSchema } from "../modules/pets/pet.schema.js";

export const swaggerOptions = {
  openapi: '3.0.0',
  info: {
    title: 'PalCare API',
    description: 'Documentación de la API de PalCare',
    version: '1.0.0',
  },
  servers: [
    {
      url: `http://localhost:8080/api`,
      description: 'Servidor de desarrollo',
    },
  ],
  paths: {
    ...userPaths,
    ...petPaths,
  },
  components: {
    schemas: {
      User: userDocSchema,
      Pet: petDocSchema
    }
  }
};

export const specs = swaggerJsDoc(swaggerOptions);