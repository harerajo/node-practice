import Subscriber from "../database/subscribers";

export const getAllSubscribers = async (req, res) => {
	const subscribers = await Subscriber.find();
	return res.status(200).json({
		status: 200,
		message: "subscribers fetched successfully",
		data: { subscribers },
	});
};

export const removeOneSubscriber = async (req, res) => {
	const subscriber = await Subscriber.findOneAndDelete({ email: req.email });
	if (!subscriber)
		return res.status(404).json({
			status: 404,
			message: "subsciber was not found",
		});
	return res.status(200).send({
		status: 200,
		message: "subscriber removed successfully",
		data: { subscriber },
	});
};

export const createSubscriber = async (req, res) => {
	const subscriber = await Subscriber.findOne({ email: req.body.email });
	if (subscriber) {
		return res.status(404).json({ message: "You have already subscribed" });
	}
	if (!subscriber) {
		const newsubscriber = new Subscriber({
			name: req.body.name,
			email: req.body.email,
		});
		newsubscriber.save();

		return res.status(200).json({
			status: 200,
			message: "Subscription added successfully",
			data: { newsubscriber },
		});
	}
};
