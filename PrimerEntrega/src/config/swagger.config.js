

const swaggerOptions  = {
    swaggerdefinition: {
    openapi: "3.0.1",
    info: {
      title: "API de Usuarios",
      version: "1.0.0",
      description: "Documentación de la API de Usuarios",
    },
  },
  apis: ["./src/modules/users/user.router.js"],
};

export const specs = swaggerJsDoc(swaggerOptions);