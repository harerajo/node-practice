import express from "express";
import {
	createArticles,
	deleteArticles,
	getAllArticles,
	getOneArticle,
	updateArticles,
} from "../controlers/articles";

const router = express.Router();

router.get("/", getAllArticles);
router.post("/", createArticles);
router.put("/:id", updateArticles);
router.delete("/:id", deleteArticles);
router.get("/:id", getOneArticle);

export default router;
