// Authorization middleware
const authorize = (req, res, next) => {
	const { user } = req.query;
	if (user === "Eric") {
		req.user = { name: "Eric", id: 3 };
		next();
	} else {
		res.status(401).send("Unauthorized");
	}
};

module.exports = authorize;
