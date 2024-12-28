// database.js
const mysql = require('mysql2');

// Création d'un pool de connexions
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Vérification de la connexion
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Successfully connected to MySQL');
  connection.release();
});



// Export du pool avec support des promesses
module.exports = pool.promise()//Le pool.promise() est utilisé pour permettre l'utilisation des Promesses et async/await avec MySQL, sans avoir à utiliser des callbacks.