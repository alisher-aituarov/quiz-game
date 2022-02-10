const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
	const token = req.headers.authorization?.split(' ')?.[1];
	if (!token) {
		res.status(401).send({
			message: 'Not authorized, no token found',
		});
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		next();
	} catch (e) {
		res.status(401).send({
			message: 'Invalid token',
		});
	}
};

module.exports = { protect };
