const { usuario } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const user = await usuario.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson
      });
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.',
      });
    }
  },
  async login(req, res) {
    try {
      //nombres latitud longitud num_servicioscodigo_verificacion": null
      const { email, password } = req.body;
      const user = await usuario.findOne({
        where: {
          email: email,
          password: password
        },
      });
      if (!user) {
        return res.status(403).send({
          error: 'Error http/403 el usuario no existe',
        });
      }
      res.send({
        user: user.toJSON()
      });
    } catch (err) {
      res.status(500).send({
        error: 'Error http/500 en authController.login',
      });
    }
  },
};