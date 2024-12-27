// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Récupérer le token depuis l'en-tête Authorization

  if (!token) {
    return res.status(403).json({ message: 'Accès interdit' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Décoder le token et ajouter l'utilisateur à la requête
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide' });
  }
};

module.exports = authMiddleware;
