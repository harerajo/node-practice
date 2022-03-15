import express from "express";
import auth from "./routes/auth";
import "dotenv/config";
import queries from "./routes/queries";
import home from "./routes/home";
import articles from "./routes/articles";
import subscribers from "./routes/subscribers";
import "./database";

const app = express();
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use("/api", home);
app.use("/api/queries", queries);
app.use("/api/articles", articles);
app.use("/api/subscription", subscribers);
app.use("/api/auth", auth);
app.set("view engine", "pug");

app.use((req, res) =>
	res.status(404).send({ status: 404, error: `Route ${req.url} not found` })
);
app.use((err, req, res) =>
	res.status(500).send({ status: 500, error: "Server error" })
);

export default app;
