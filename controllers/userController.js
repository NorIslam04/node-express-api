//Contrôleur : Manipule les requêtes HTTP et appelle les services

// controllers/userController.js

const MySQL_DB = require('../config/MySQL_DB');
const userService = require('../services/userService');

// Créer un utilisateur
const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const addUser=(req, res) => {//req en a pas besoin car on ne passe pas de données
  try {
    //req.query: accepter les query parameters
    //req.body: accepter les données du corps de la requête (postman)
    const newUser = userService.addUser();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const getUsersDB = async (req, res) => {//req en a pas besoin car on ne passe pas de données
  try {
    const users = await userService.getUsersDB();
    res.status(200).json(users);
  } catch (error) { // Changé 'err' en 'error' pour être cohérent
    res.status(500).json({ message: error.message });
  }
};


// Récupérer un utilisateur par ID
const fetachAllUsers = (req, res) => {
  try {
      const users =userService.fetachAllUsers();
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ 
          status: 'error',
          message: 'Error fetching users',
          error: err.message 
      });
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

module.exports = { createUser, getAllUsers, fetachAllUsers,addUser,getUsersDB };//exporter les fonctions pour les utiliser dans le routeur
