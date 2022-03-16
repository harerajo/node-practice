import swaggerJSDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import { Router } from "express";
import "dotenv/config";

const router = Router();

const swaggerDef = {
	definition: {
		info: {
			title: "Node - practice api",
			version: "1.0.0",
			description:
				"node practice description. this is my brand",
            author: " Johnny"
		},
		securityDefinitions: {
			bearerAuth: {
				type: "apiKey",
				name: "token",
				description:
					'First login to get a token then paste it in "value" below',
				scheme: "bearer",
				in: "header",
			},
		},
	},
	apis: ["./src/swagger/*.swagger.js"],
};

const swaggerDoc = swaggerJSDoc(swaggerDef);

router.get("/json", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.send(swaggerDoc);
});

router.use("/", swaggerui.serve, swaggerui.setup(swaggerDoc));

export default router;
