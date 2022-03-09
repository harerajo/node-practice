import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const privateKey = process.env.JWT_SECRET_KEY;

export const generateToken = (payload) => {
	const token = jwt.sign(payload, privateKey);
	return token;
};

export const decodeToken = (token) => {
	const payload = jwt.verify(token, privateKey);
	return payload;
};
