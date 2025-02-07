import { Router } from "express";
import { registerUser } from "../controllers/user.controller.ts";

const router = Router();

router.post("/register", registerUser);

export default router