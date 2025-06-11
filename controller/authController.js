const User = require('../modals/user');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

   if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const payload = {
      id: user.id,
      username: user.username,
      role: user.role
    };

    const token = jwt.sign(payload, 'secretkey', { expiresIn: '1h' });

    res.json({ token, user: payload });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const signUp=async (req,res) => {
    
}



module.exports = { login,signUp };
