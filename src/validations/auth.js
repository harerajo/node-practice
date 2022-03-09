import Joi from "joi";

export const validateUserSignup = (req, res, next) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().email().required(),
		role: Joi.string().valid("admin", "visitor").required(),
		password: Joi.string().min(4).max(30).required(),
	});
	const { error } = schema.validate(req.body);
	if (error)
		return res
			.status(400)
			.send({ status: 400, error: error.details[0].message });

	next();
};

export const validateUserLogin = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().required(),
	});
	const { error } = schema.validate(req.body);

	if (error)
		return res
			.status(400)
			.send({ status: 400, error: error.details[0].message });

	next();
};

export const validateProfile = (req, res, next) => {
	const schema = Joi.object({
		name: Joi.string().min(3),
		role: Joi.string(),
		profilePicture: Joi.string(),
		profession: Joi.string(),
		skills: Joi.string(),
		experience: Joi.string(),
		physicalAddress: Joi.string(),
		socialMedia: Joi.string(),
	});
	const { error } = schema.validate(req.body);

	if (error)
		return res
			.status(400)
			.send({ status: 400, error: error.details[0].message });

	next();
};
