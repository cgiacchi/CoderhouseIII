import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import { generateDataSchema } from "./mocks.schema.js";

const router = Router();

router.get("/mockingpets:num", mocksController.getMockingPets);
router.get("/mockingusers", mocksController.getMockingUsers);
router.post("/generatedata", validateSchema(generateDataSchema), mocksController.generateData);

export default router;