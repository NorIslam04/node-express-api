//Service : Contient la logique métier, comme les opérations sur la base de données.

//Mongoose fournit des méthodes prédéfinies comme findById, findByIdAndUpdate, findByIdAndDelete
//et save qui permettent de manipuler facilement les documents dans la base de données MongoDB.

const User = require("../models/userModel");//en peut utiliser les method de mongoose: findById, findByIdAndUpdate, findByIdAndDelete et save


// en peut pas utiliser les methodes de mongoose car il doit const User = require('../models/userModel');
const Users = [];

// Service layer
const fetachAllUsers = () => {
  return Users;
};


// Créer un utilisateur
const createUser = async (userData) => {//async -> retourne une promesse
  try {
    const newUser = new User(userData);
    await newUser.save();//await car il attend que la sauvegarde soit terminée dans la base de données
    return newUser;
  } catch (err) {
    throw new Error('Erreur lors de la création de l\'utilisateur');
  }
};


// Ajouter un utilisateur
const addUser = (userData) => {
  // Validation des données
  if (!userData.name || !userData.email) { // ajoutez les champs requis
      throw new Error('Les champs nom et email sont obligatoires');
  }

  // Création d'un nouvel utilisateur avec toutes les données
  const newUser = {
      id: Users.length + 1,
      name: userData.name,
      email: userData.email,
      date: new Date()
  }

  // Ajouter l'utilisateur à la liste
  Users.push(newUser);

  // Retourner l'objet utilisateur complet
  return newUser;
};






// Récupérer tous les utilisateurs
const getAllUsers = async () => {//async -> retourne une promesse
  try {
    const users = await User.find();//await car il attend que la recherche soit terminée dans la base de données
    return users;
  } catch (err) {
    throw new Error('Erreur lors de la récupération des utilisateurs');
  }
};

module.exports = { createUser, getAllUsers, fetachAllUsers,addUser };//exporter les fonctions pour les utiliser dans le contrôleur
