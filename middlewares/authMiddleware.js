// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Récupérer le token depuis l'en-tête Authorization

  if (!token) {//si le token n'est pas présent n'est existe pas
    //tkon n'existe pas
    return res.status(403).json({ message: 'Accès interdit' });
  }

  try {
    //token existe:

    // Vérifier le token
    //1-> decode the token utilison le JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded;  //on ajoute l'objet décodé à la requête, pour qu'il soit accessible dans les middlewares et les contrôleurs suivants
    //en le mettant dans req.user
    next();//appel le middleware suivant
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide' });
  }
};

module.exports = authMiddleware;
