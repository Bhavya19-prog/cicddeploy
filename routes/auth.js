const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const router = express.Router();

router.post('/login', async (req, res) => {
    console.log('Login request received');

  const { email, password } = req.body;
    console.log('Credentials received:', email);
  try {
    const user = await User.findOne({ email });
      console.log('User found:', user);
    if (!user){
        console.log('User not found');
     return res.status(401).json({ msg: 'User not found' });
    }
    //const   isMatch = await bcrypt.compare(password, user.password);
   const isMatch = password === user.password; 
    console.log("Incoming login request body:", req.body);
console.log("Raw password from client:", password);
console.log("Hashed password from DB:", user.password);
    console.log('Password match:', isMatch);
    if (!isMatch)
        {console.log('Invalid credentials');
             return res.status(401).json({ msg: 'Invalid credentials' });
        }

    const payload = { id: user._id,email: user.email};
 
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
   console.log('Token generated');
   res.json({
  token,
  user: {
    id: user._id,
    email: user.email
   // role: user.role
  }
});

  } catch (err) {
    console.error('Login error:', err); 
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
