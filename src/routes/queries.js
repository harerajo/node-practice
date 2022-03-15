import express from "express";
import { createquery, getAllqueries, getOneQuery } from "../controlers/queries";
import { isAdmin } from "../middlewares/auth";
import { validateQuery } from "../validations/queries";

const router = express.Router();

router.get("/", isAdmin, getAllqueries);
router.get("/:id", isAdmin, getOneQuery);
router.post("/", validateQuery, createquery);

export default router;
