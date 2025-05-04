FROM node

WORKDIR /src

COPY package*.json ./

RUN npm install

# Copia el resto del proyecto
COPY . .

# Puerto expuesto (usa el mismo que en tu app.js)
EXPOSE 8080

# Comando para iniciar la app
CMD ["node", "src/app.js"]