// import mongoose from "mongoose";

// const UserSchema = mongoose.Schema({
// 	firstName: {
// 		type: String,
// 		require: true,
// 	},
// 	lastName: {
// 		type: String,
// 		require: true,
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 	},
// });

// const User = mongoose.model("User", UserSchema);
// export default User;
const { string, date } = require("joi");
const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost:27017/brandy")
	.then(() => console.log("connected to mongodb..."))
	.catch((err) => console.error("couldnot connect to database...", err));
const querriesSchema = new mongoose.Schema({
	sender: String,
	email: String,
	tags: [String],
	date: { type: Date, default: Date.now },
	isPublished: Boolean,
});
