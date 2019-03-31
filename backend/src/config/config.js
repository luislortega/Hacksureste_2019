// Fix the deprecated system
const Sequelize = require('sequelize');
const op = Sequelize.Op;

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'bepensa',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '1298Luis',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      operatorsAliases: op,
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};
