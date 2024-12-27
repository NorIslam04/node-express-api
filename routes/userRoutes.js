// routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createUser); // POST pour créer un utilisateur
router.get('/', userController.getAllUsers); // GET pour récupérer tous les utilisateurs

module.exports = router;
