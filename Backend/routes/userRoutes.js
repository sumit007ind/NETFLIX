import express from "express";
import { register, Login, LogOut } from "../controllers/user.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/Login").post(Login);
router.route("/LogOut").get(LogOut);

export default router;
