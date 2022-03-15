import Joi from "joi";

export const validateArticle = (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string().min(5).required(),
		content: Joi.string().min(5).required(),
		author: Joi.string().min(5).required(),
		coverImage: Joi.string(),
	});
	const { error } = schema.validate(req.body);

	if (error)
		return res
			.status(400)
			.json({ status: 400, error: error.details[0].message });

	next();
};

export const validateComment = (req, res, next) => {
	const schema = Joi.object({
		comment: Joi.string().min(5).required(),
		name: Joi.string().required(),
	});
	const { error } = schema.validate(req.body);

	if (error)
		return res
			.status(400)
			.json({ status: 400, error: error.details[0].message });

	next();
};
