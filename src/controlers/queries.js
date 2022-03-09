import queries from "../database/dummy";

export const getAllqueries = (req, res) => {
	res.status(200).send({
		status: 200,
		message: "Queries fetched successfully",
		data: { queries },
	});
};

export const getOneQuery = (req, res) => {
	const query = queries.find((c) => c.id === parseInt(req.params.id));
	if (!query)
		return res.status(404).send({
			status: 404,
			message: "Query was not found",
		});
	res.status(200).send({
		status: 200,
		message: "Query fetched successfully",
		data: { query },
	});
};

export const createquery = (req, res) => {
	const query = {
		id: queries.length + 1,
		name: req.body.name,
		query: req.body.query,
		email: req.body.email
	};
	queries.push(query);
	res.status(200).send({
		status: 200,
		message: "Query created successfully",
		data: { query },
	});
};
