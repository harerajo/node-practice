import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbUrl = process.env.DATABASE_URL;

mongoose
	.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((result) => console.log(" Database connection succesfull"))
	.catch((error) => console.log(" Database connection failed", error));
