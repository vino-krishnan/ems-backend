const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secretkey'; // Use .env for production

// Middleware to decode JWT and attach user info
const decodeToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header missing or invalid' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    req.user = {
      id: decoded.id,
      role: decoded.role
    };

    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

module.exports = {
  decodeToken
};
