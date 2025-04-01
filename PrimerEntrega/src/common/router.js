import { Router } from "express";
import userRouter from "../modules/users/user.router.js";
import authRouter from "../modules/auth/auth.router.js"
import petRouter from "../modules/pets/pet.router.js"
import adoptionRouter from "../modules/adoptions/adoption.router.js";
import mocksRouter from "../modules/mocks/mocks.router.js";




const router = Router();
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/pets", petRouter);
router.use("/adoptions", adoptionRouter);
router.use("/mocks", mocksRouter);


export default router;
