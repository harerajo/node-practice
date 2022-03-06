import express from "express";
import home from "./routes/home"
import articles from "./routes/articles";
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api", home);
app.use("/api/articles", articles);
app.set("view engine", "pug");

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ...`, PORT));
