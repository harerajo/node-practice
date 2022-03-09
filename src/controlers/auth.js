import Users from "../database/user";
import { checkPassword, hashPassword } from "../helpers/hashPasswords";
import { decodeToken, generateToken } from "../helpers/tokens";

export const getAllUsers = async (req, res) => {
	const users = await Users.find();
	res.status(200).json({
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
		return res.status(404).json({
			status: 404,
			message: "Email or password is incorrect",
		});
	const token = generateToken({ id, email, name, role });

	res.status(200).send({
		status: 200,
		message: "User logged in successfully",
		data: { token },
	});
};

export const signUp = async (req, res) => {
	const { email, name, role } = req.body;
	const password = await hashPassword(req.body.password);
	const user = new Users({ name, email, role, password });
	user.save();
	res.status(201).send({
		status: 201,
		message: "User created successfully",
		data: { user },
	});
};

export const getProfile = async (req, res) => {
	const users = await Users.findOne({ email: req.email });

	return res.status(200).json({
		status: 200,
		message: "User found succesfully",
		data: { users },
	});
};

export const updateProfile = async (req, res) => {
	const user = await Users.findOneAndUpdate({email: req.email});
	if (!user)
		return res.status(404).json({
			status: 404,
			message: "User was not found",
		});

	user.name = req.body.name;
	user.profilePicture = req.body.profilePicture;
	user.profession = req.body.profession;
	user.skills = req.body.skills;
	user.experience = req.body.experience;
	user.physicalAddress = req.body.physicalAddress;
	user.socialMedia = req.body.socialMedia;
	user.save();

	res.status(200).json({
		status: 200,
		message: "User updated successfully",
		data: { user },
	});
};
