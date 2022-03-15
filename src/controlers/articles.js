import Articles from "../database/articles";

export const getAllArticles = async (req, res) => {
	const articles = await Articles.find();
	res.status(200).json({
		status: 200,
		message: "Articles fetched successfully",
		data: { articles },
	});
};

export const getOneArticle = async (req, res) => {
	const article = await Articles.findById({ _id: req.params.id });
	if (!article)
		return res.status(404).json({
			status: 404,
			message: "Article was not found",
		});
	res.status(200).json({
		status: 200,
		message: "Article fetched successfully",
		data: { article },
	});
};

export const createArticles = async (req, res) => {
	const article = new Articles({
		title: req.body.title,
		content: req.body.content,
		author: req.body.author,
		comments: req.body.comment,
	});
	article.save();

	res.status(201).json({
		status: 201,
		message: "Article created successfully",
		data: { article },
	});
};

export const deleteArticles = async (req, res) => {
	const article = await Articles.findByIdAndRemove({ _id: req.params.id });
	if (!article)
		return res.status(404).json({
			status: 404,
			message: "Article was not found",
		});
	res.status(200).json({
		status: 200,
		message: "Article deleted successfully",
		data: { article },
	});
};

export const updateArticles = async (req, res) => {
	const article = await Articles.findByIdAndUpdate({ _id: req.params.id });
	if (!article)
		return res.status(404).json({
			status: 404,
			message: "Article was not found",
		});

	article.title = req.body.title;
	article.content = req.body.content;
	article.author = req.body.author;
	article.save();

	res.status(200).json({
		status: 200,
		message: "Article updated successfully",
		data: { article },
	});
};

export const commentOnArticle = async (req, res) => {
	const article = await Articles.findByIdAndUpdate({ _id: req.params.id });
	if (!article)
		return res.status(404).json({
			status: 404,
			message: "Article was not found",
		});

	const comment = {
		comment: req.body.comment,
		name: req.body.name,
	};
	article.comments.push(comment);
	article.save();
	res.status(200).json({
		status: 200,
		message: "Comment added successfully",
		data: { article },
	});
};
