import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(2);
	const hashedPassword = await bcrypt.hash(password, salt);
	return hashedPassword;
};

export const checkPassword = (password, passwordToCompare) => {
	return bcrypt.compare(password, passwordToCompare);
};
