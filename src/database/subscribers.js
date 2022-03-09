import mongoose from "mongoose";

const subscriberschema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	
});
const Subscriber= mongoose.model("Subscriber", subscriberschema);

export default Subscriber;
