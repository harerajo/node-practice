import Subscriber from "../database/subscribers";

export const getAllSubscribers = async (req, res) => {
	const subscribers = await Subscriber.find();
	res.status(200).json({
		status: 200,
		message: "subscribers fetched successfully",
		data: { subscribers },
	});
};

export const removeOneSubscriber = async (req, res) => {
	const subscriber = await Subscriber.findByIdAndDelete({ _id: req.params.id });
	if (!subscriber)
		return res.status(404).json({
			status: 404,
			message: "subsciber was not found",
		});
	res.status(200).send({
		status: 200,
		message: "subscriber removed successfully",
		data: { subscriber },
	});
};

export const createSubscriber = async (req, res) => {
	const subscriber = new Subscriber({
		name: req.body.name,
		email: req.body.email,
	});
	subscriber.save();
	res.status(200).json({
		status: 200,
		message: "subscription  added successfully",
		data: { subscriber },
	});
};
