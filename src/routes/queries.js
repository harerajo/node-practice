import express from "express";
import { createquery, getAllqueries, getOneQuery } from "../controlers/queries";
import { validateQuery } from "../validations/queries";

const router = express.Router();

router.get("/", getAllqueries);
router.get("/:id", getOneQuery);
router.post("/", validateQuery, createquery);

export default router;
