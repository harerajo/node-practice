import express from "express";
import queries from "./routes/queries";
import subscriber from "./routes/subscribers";
import dotenv from "dotenv";
import "./database";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/queries", queries);
app.use("/api/subscribers", subscriber);
app.set("view engine", "pug");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => process.stdout.write(`listening on port ... ${PORT}`));
