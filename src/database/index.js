import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbUrl = process.env.DATABASE_URL;

mongoose
	.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
