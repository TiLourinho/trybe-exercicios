const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'lourinho',
  password: '56874646',
  database: 'model_exercise'
});

module.exports = connection;
