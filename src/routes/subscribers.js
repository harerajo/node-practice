import express from "express";

import { createSubscriber, getAllSubscribers, removeOneSubscriber } from "../controlers/subscribers";


const router = express.Router();

router.get("/",getAllSubscribers)
router.post("/", createSubscriber);
router.delete("/:id", removeOneSubscriber);
export default router;
