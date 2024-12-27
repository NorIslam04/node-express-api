// routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.fetachAllUsers); // GET pour récupérer tous les utilisateurs

module.exports = router;
