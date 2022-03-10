import mongoose from "mongoose";

const articleschema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
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
