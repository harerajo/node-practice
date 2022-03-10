import express from "express";
import {
	commentOnArticle,
	createArticles,
	deleteArticles,
	getAllArticles,
	getOneArticle,
	updateArticles,
} from "../controlers/articles";
import { validateArticle, validateComment } from "../validations/articles";

const router = express.Router();

router.get("/", getAllArticles);
router.get("/:id", getOneArticle);
router.post("/", validateArticle, createArticles);
router.put("/:id", validateArticle, updateArticles);
router.delete("/:id", deleteArticles);
router.put("/:id/comment", validateComment, commentOnArticle);

export default router;
