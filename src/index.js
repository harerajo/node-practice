import express from "express";
import dotenv from "dotenv";
import queries from "./routes/queries";
import home from "./routes/home";
import articles from "./routes/articles";
import subscribers from "./routes/subscribers"
import "./database";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/queries", queries);
app.use("/api", home);
app.use("/api/articles", articles);
app.use("/api/subscribers", subscribers)
app.set("view engine", "pug");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => process.stdout.write(`listening on port ... ${PORT}`));
