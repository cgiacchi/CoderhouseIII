import mongoose from "mongoose";
import envsConfig from "./envs.config.js";
import { logger } from "../common/utils/logger.js";

export const connectDB = () => {
    try {
    mongoose.connect(envsConfig.MONGO_URL);
    logger.info("Mongo DB connected");
    
    } catch (error) {
    logger.error("Error connecting Mongo");
    }
}