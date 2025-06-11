// Middleware to allow only managers
const allowManager = (req, res, next) => {
  if (req.user?.role !== 'manager') {
    return res.status(403).json({ error: 'Access denied: Managers only' });
  }
  next();
};

// Middleware to allow only employees
const allowEmployee = (req, res, next) => {
  if (req.user?.role !== 'employee') {
    return res.status(403).json({ error: 'Access denied: Employees only' });
  }
  next();
};

module.exports = {
  allowManager,
  allowEmployee
};
