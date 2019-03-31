const AuthController = require('../controller/authController');

module.exports = app => {
    /**
     * USUARIOS
     * * Login
     * * Registro
     */
    app.post('/login', AuthController.login);
    app.post('/registro', AuthController.register);
  };