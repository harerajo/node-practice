import QueryModel from "../database/queries";

export const getAllqueries = async (req, res) => {
	const queries = await QueryModel.find();
	res.status(200).json({
		status: 200,
		message: "Queries fetched successfully",
		data: { queries },
	});
};

export const getOneQuery = async (req, res) => {
	const query = await QueryModel.findOne({ _id: req.params.id });
	if (!query)
		return res.status(404).json({
			status: 404,
			message: "Query was not found",
		});
	res.status(200).json({
		status: 200,
		message: "Query fetched successfully",
		data: { query },
	});
};

export const createquery = async (req, res) => {
	const query = new QueryModel({
		name: req.body.name,
		email: req.body.email,
		query: req.body.query,
	});

	query.save();
	res.status(201).json({
		status: 201,
		message: "Query created successfully",
		data: { query },
	});
};
