import express from "express";

import {
	createSubscriber,
	getAllSubscribers,
	removeOneSubscriber,
} from "../controlers/subscribers";
import { isAdmin, isAuthorised } from "../middlewares/auth";
import { validateSubcribers } from "../validations/subscribers";

const router = express.Router();

router.get("/subscribers", isAdmin, getAllSubscribers);
router.post("/subscribe", validateSubcribers,createSubscriber);
router.delete("/unsubscribe", isAuthorised, removeOneSubscriber);
export default router;
