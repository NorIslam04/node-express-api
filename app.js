// app.js
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const cors = require('cors');

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// Importer la connexion à la base de données (cela exécutera la connexion automatiquement)
require('./config/database'); // Assurez-vous que le chemin vers `database.js` est correct

const app = express();

// Middleware pour parser le corps de la requête
app.use(express.json());

// Middleware CORS (si nécessaire)
app.use(cors());

// Utilisation des routes
app.use('/api/users', userRoutes);

// Middleware pour gérer les erreurs
app.use(errorMiddleware);

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
