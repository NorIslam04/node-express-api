// routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');
const MySQL_DB = require('../config/MySQL_DB');

const router = express.Router();

router.get('', userController.fetachAllUsers); // GET pour récupérer tous les utilisateurs
router.post('/adduser', userController.addUser); // POST pour créer un nouvel utilisateur
router.get('/usersDB', userController.getUsersDB); // POST pour créer un nouvel utilisateur
router.post("/createUser", userController.createUser);
module.exports = router;
