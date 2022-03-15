import express from "express";
import {
	signUp,
	login,
	getAllUsers,
	getProfile,
	updateProfile,
} from "../controlers/auth";
import { checkIfUserExists, isAuthorised } from "../middlewares/auth";
import { checkIfAttemptExists } from "../middlewares/auth";
import {
	validateProfile,
	validateUserLogin,
	validateUserSignup,
} from "../validations/auth";

const router = express.Router();

router.post("/login", validateUserLogin, checkIfAttemptExists, login);
router.post("/signup", validateUserSignup, checkIfUserExists, signUp);
router.get("/all-users", isAuthorised, getAllUsers);

router.get("/profile", isAuthorised, getProfile);
router.put("/profile", isAuthorised, validateProfile, updateProfile);

export default router;
