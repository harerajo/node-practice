import express from "express";
import auth from "./routes/auth";
import "dotenv/config";
import queries from "./routes/queries";
import home from "./routes/home";
import articles from "./routes/articles";
import subscribers from "./routes/subscribers";
import "./database";
import swagger from "./swagger/index";
// import swaggerUiExpress from "swagger-ui-express";
// import swaggerJSDoc from "swagger-jsdoc";

// const swaggerOption = {
// 	swaggerDefinition: {
// 		info: {
// 			title: "Articles API",
// 			description: "article description",
// 			contact: {
// 				author: "jonathan swagger",
// 			},
// 			servers: ["http://localhost:3000"],
// 		},
// 	},
// 	apis: ["app.js"],
// };
// const swaggerDocs = swaggerJSDoc(swaggerOption);
const app = express();
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use("/api-docs", swagger);
app.use("/api", home);

/**
 * @swagger
 * /api/queries:
 * get:
 * 	 description: Get all queries
 *   responses:
 * 		'200'
 */
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
