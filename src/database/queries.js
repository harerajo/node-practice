import mongoose from "mongoose";

const queriesSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	query: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

const QueryModel = mongoose.model("Query", queriesSchema);

export default QueryModel;
