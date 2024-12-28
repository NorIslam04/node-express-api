// database.js
const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

module.exports = mongoose; // Si vous voulez l'utiliser ailleurs, mais ce n'est pas nécessaire dans ce cas.
