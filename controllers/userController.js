//Contrôleur : Manipule les requêtes HTTP et appelle les services

// controllers/userController.js

const userService = require('../services/userService');

// Créer un utilisateur
const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createUser, getAllUsers };
