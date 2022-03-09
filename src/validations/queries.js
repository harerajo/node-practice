import Joi from "joi";

export const validateQuery = (req, res, next) => {
	const schema = Joi.object({
		query: Joi.string().min(5).required(),
		name: Joi.string().required(),
		email: Joi.string().email().required()
	});
	const { error } = schema.validate(req.body);

	if (error)
		return res
			.status(400)
			.send({ status: 400, error: error.details[0].message });

	next();
};
