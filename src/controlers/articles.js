import articles from "../database/dummy";
import Joi from "joi";

function validateArticle(article) {
	const schema = Joi.object({
		title: Joi.string().min(5).required(),
	});
	return schema.validate(article);
}

export const getAllArticles = (req, res) => {
	res.status(200).send({
		status: 200,
		message: "Articles fetched successfully",
		data: articles,
	});
};

export const getOneArticle = (req, res) => {
	const article = articles.find((c) => c.id === parseInt(req.params.id));
	if (!article)
		return res.status(404).send({
			status: 404,
			message: "Article was not found",
		});
	res.status(200).send({
		status: 200,
		message: "Article fetched successfully",
		data: article,
	});
};

export const createArticles = (req, res) => {
	const { error } = validateArticle(req.body);
	if (error)
		return res.status(400).send({ status: 400, error: error.details[0].message });

	const article = {
		id: articles.length + 1,
		title: req.body.title,
	};
	articles.push(article);
	res.status(200).send({
		status: 200,
		message: "Article created successfully",
		data: article,
	});
};

export const deleteArticles = (req, res) => {
	const article = articles.find((c) => c.id === parseInt(req.params.id));
	if (!article)
		return res.status(404).send({
			status: 404,
			message: "Article was not found",
		});
	const index = articles.indexOf(article);
	articles.splice(index, 1);
	res.status(200).send({
		status: 200,
		message: "Article deleted successfully",
		data: article,
	});
};

export const updateArticles = (req, res) => {
	const article = articles.find((c) => c.id === parseInt(req.params.id));
	if (!article)
		return res.status(404).send({
			status: 404,
			message: "Article was not found",
		});

	const { error } = validateArticle(req.body);
	if (error)
		return res.status(400).send({ status: 400, error: error.details[0].message });

	article.title = req.body.title;
	res.status(200).send({
		status: 200,
		message: "Article updated successfully",
		data: article,
	});
};
