// controllers/userController.js
const User = require('../models/userModel');

const bcrypt = require('bcryptjs');


const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email }).select('+password');
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

   // const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({  password ,email});
    console.log('User created:', user);
    // Generate JWT token
   // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return user info without password
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token
    });
  } catch (err) {
    console.error('Create user error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};