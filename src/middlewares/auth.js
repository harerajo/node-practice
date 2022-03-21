import Users from "../database/user";
import { decodeToken } from "../helpers/tokens";

export const checkIfUserExists = async (req, res, next) => {
	const user = await Users.findOne({
		email: req.body.email,
	});

	if (user) {
		return res.status(409).json({
			status: 409,
			message: "Email is already in use",
		});
	}
	next();
};

export const checkIfAttemptExists = async (req, res, next) => {
	const user = await Users.findOne({
		email: req.body.email,
	});
	if (!user) {
		return res.status(409).json({
			status: 409,
			message: "Email or password is incorrect",
		});
	}
	next();
};

export const isAuthorised = async (req, res, next) => {
	try {
		const { token } = req.headers;
		const { id, email } = decodeToken(token);

		if (!token) {
			return res.status(401).json({
				status: 401,
				message: "No token provided",
			});
		}

		const users = await Users.findById(id);
		if (!users)
			return res.status(401).json({
				status: 401,
				message: "You are not authorized to perform this action",
			});

		req.email = email;
		next();
	} catch (error) {
		if (error.name === "JsonWebTokenError")
			return res.status(400).json({
				status: 400,
				message: "Token must be provided and valid",
			});
		return res.status(500).json({
			status: 500,
			message: "Server error",
		});
	}
};

export const isAdmin = (req, res, next) => {
	try {
		const { token } = req.headers;
		if (token) {
			const payload = decodeToken(token);
			if (payload) {
				if (payload.role == "admin") return next();
				return res.status(401).json({
					status: 401,
					message: "You are not authorized to perform this action",
				});
			}
			
		}
		return res
			.status(401)
			.json({ status: 401, message: "Token must be provided and valid" });
	} catch (error) {
		if (error.name === "JsonWebTokenError")
			return res.status(400).json({
				status: 400,
				message: "Token must be provided and valid",
			});
		return res.status(500).json({
			status: 500,
			message: "Server error",
		});
	}
};
