import mongoose from "mongoose";

const articleschema = new mongoose.Schema({
	author: { type: String, required: true },
	title: { type: String, required: true },
	content: { type: String, required: true },
	coverImage: { type: String },
	comments: [
		{
			name: { type: String, required: true },
			comment: { type: String, required: true },
			createdAt: { type: Date, default: Date.now },
		},
	],
});
const Article = mongoose.model("Article", articleschema);

export default Article;
