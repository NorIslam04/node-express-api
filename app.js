// app.js
const express = require('express');
const dotenv = require('dotenv');
// Charger les variables d'environnement à partir du fichier .env
dotenv.config();
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const cors = require('cors');
const port = process.env.PORT || 3000;


// Importer la connexion à la base de données (cela exécutera la connexion automatiquement)
require('./config/database'); // Assurez-vous que le chemin vers `database.js` est correct

//créer une application express
const app = express();

// Middleware pour parser le corps de la requête
app.use(express.json());

// Middleware CORS (si nécessaire)
app.use(cors());

// Utilisation des routes
app.use('/users', userRoutes);

// Middleware pour gérer les erreurs
app.use(errorMiddleware);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Access your app at: http://localhost:${port}`);
  console.log(`Access your API at: http://localhost:${port}/users`);
});
