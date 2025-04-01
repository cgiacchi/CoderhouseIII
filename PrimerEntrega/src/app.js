import express from "express";
import envsConfig from "./config/envs.config";
import { connectDB } from "./config/mongoDb.config.js";
import router from "./common/router.js";
import { customError } from "./common/errors/customError.js";
import swaggerUiExpress from "swagger-ui-express";
import { specs } from "./config/swagger.config.js";


const app = express();
connectDB();
console.log(process.env.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/api", router);

app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use(customError);
app.listen(envsConfig.PORT, () => {
    console.log(`Listening on port ${envsConfig.PORT}` );
})

