import express from "express";
import {
	commentOnArticle,
	createArticles,
	deleteArticles,
	getAllArticles,
	getOneArticle,
	updateArticles,
} from "../controlers/articles";
import { isAdmin } from "../middlewares/auth";
import { validateArticle, validateComment } from "../validations/articles";

const router = express.Router();

router.get("/", getAllArticles);
router.get("/:id", getOneArticle);
router.post("/", isAdmin, validateArticle, createArticles);
router.put("/:id", isAdmin, validateArticle, updateArticles);
router.delete("/:id", isAdmin, deleteArticles);
router.put("/:id/comment", validateComment, commentOnArticle);

export default router;
