import Joi from "joi";

export const validateSubcribers = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		name: Joi.string().required(),
	});
	const { error } = schema.validate(req.body);

	if (error)
		return res
			.status(400)
			.json({ status: 400, error: error.details[0].message });

	next();
};
