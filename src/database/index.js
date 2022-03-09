import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const environment = process.env.NODE_ENV;

const dev_db = process.env.DEVELOPMENT_DB;
const prod_db = process.env.PRODUCTION_DB;
const test_db = process.env.TEST_DB;

const db_url =
	environment === "prod" ? prod_db : environment === "dev" ? dev_db : test_db;

mongoose
	.connect(db_url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((result) => console.log(" Database connection succesfull on ", db_url))
	.catch((error) => console.log(" Database connection failed", error));
