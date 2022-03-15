import express from "express";

import {
	createSubscriber,
	getAllSubscribers,
	removeOneSubscriber,
} from "../controlers/subscribers";
import { isAdmin, isAuthorised } from "../middlewares/auth";

const router = express.Router();

router.get("/subscribers", isAdmin, getAllSubscribers);
router.post("/subscribe", createSubscriber);
router.delete("/unsubscribe", isAuthorised, removeOneSubscriber);
export default router;
