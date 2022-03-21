import Users from "../database/user";
import { checkPassword, hashPassword } from "../helpers/hashPasswords";
import { decodeToken, generateToken } from "../helpers/tokens";

export const getAllUsers = async (req, res) => {
	const users = await Users.find().select("-password");
	return res.status(200).json({
		status: 200,
		message: "Users fetched successfully",
		data: { users },
	});
};

export const login = async (req, res) => {
	const { id, name, email, password, role } = await Users.findOne({
		email: req.body.email,
	});
	const isPasswordEqual = await checkPassword(req.body.password, password);

	if (!isPasswordEqual)
		return res.status(401).json({
			status: 401,
			message: "Email or password is incorrect",
		});
	const token = generateToken({ id, email, name, role });

	return res.status(200).send({
		status: 200,
		message: "User logged in successfully",
		data: { token },
	});
};

export const signUp = async (req, res) => {
	const { email, name, role } = req.body;
	const password = await hashPassword(req.body.password);
	const newUser = await new Users({ name, email, role, password });
	await newUser.save();

	const user = req.body;
	delete user["password"];
	return res.status(201).send({
		status: 201,
		message: "User created successfully",
		data: { user },
	});
};

export const getProfile = async (req, res) => {
	const users = await Users.findOne({ email: req.email }).select("-password");

	return res.status(200).json({
		status: 200,
		message: "User found succesfully",
		data: { users },
	});
};

export const updateProfile = async (req, res) => {
	const user = await Users.findOneAndUpdate({ email: req.email }, req.body);
	return res.status(200).json({
		status: 200,
		message: "User updated successfully",
		data: { user },
	});
};
