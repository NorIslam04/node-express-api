const axios = require('axios');

// Fonction pour ajouter un utilisateur
const addUser = async (userData) => {
  try {
    // Appeler l'endpoint avec Axios
    console.log('userData', userData);
    const response = await axios.post('http://localhost:3000/createUser', userData);
    // Afficher les données de la réponse
    console.log('Utilisateur ajouté avec succès:', response.data);
  } catch (error) {
    // Gestion des erreurs
    console.error('Erreur lors de l\'ajout de l\'utilisateur:', error.response?.data || error.message);
  }
};

// Exemple d'utilisation
//ce shema il doivent être identiques avec le model de la base de données qui en a traiter dans userservice.js
const newUser = {
  name: 'ooooo',
  email: 'ooooppp.aoudia@gmail.com',
  password: 'eofrop345356dfke'
};

// Appel de la fonction
addUser(newUser);
