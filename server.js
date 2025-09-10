// server.js

const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
require('./config/passport'); // or wherever your strategy is defined


const app = express();
 app.use(passport.initialize());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

  // 🔐 Add CORS middleware before routes
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);






app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});