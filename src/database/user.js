import { string } from "joi";
import mongoose from "mongoose";

const userschema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, required: true },
	profilePicture: { type: String },
	skills: { type: String },
	experience: { type: String },
});
const Users = mongoose.model("User", userschema);

export default Users;
