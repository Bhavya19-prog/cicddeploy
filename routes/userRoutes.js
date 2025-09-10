// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

// Protect routes with passport JWT middleware
//router.post('/users', passport.authenticate('jwt', { session: false }), userController.createUser);
//router.get('/users', passport.authenticate('jwt', { session: false }), userController.getUsers);
router.get('/users', passport.authenticate('jwt', { session: false }), userController.getUsers);
router.post('/users', userController.createUser);
module.exports = router;
