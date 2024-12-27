# Mon Projet Node.js avec Express et MongoDB

Ce projet est une application Node.js utilisant Express et MongoDB. Il permet de gérer des utilisateurs et d'interagir avec une base de données MongoDB.

## Prérequis

- [Node.js](https://nodejs.org/) (version recommandée : v16 ou supérieure)
- [MongoDB](https://www.mongodb.com/) (local ou MongoDB Atlas)

## Installation

1. **Cloner le repository**

   Pour cloner le projet et Se déplacer dans le répertoire du projet, utilisez la commande suivante :
   ```bash
   git clone https://github.com/NorIslam04/node-express-api
   cd node-express-api

2. ### Installer les dépendances
   Lorsque vous exécutez la commande (`npm install`), elle va installer toutes les dépendances définies dans votre fichier (`package.json`) et créer un dossier (`node_modules`) dans       votre projet. Ce dossier contiendra toutes les bibliothèques nécessaires au bon fonctionnement de votre application. 
   ```bash
   npm install

4. ### **Configurer les variables d'environnement**

   Cree le fichier  .env et configurez les variables d'environnement, notamment la connexion à MongoDB.
   ```bash
   MONGO_URI=mongodb+srv://<votre-utilisateur>:<password>@cluster0.mongodb.net/<DB_name>?retryWrites=true&w=majority

5. **Exécution**
   ```bash
   npm start
   ```



   
