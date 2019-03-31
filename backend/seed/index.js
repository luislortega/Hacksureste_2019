//Modelos
const {
    sequelize,
    usuario,
  } = require('../src/models');
  const Promise = require('bluebird');
  //Datos por default en JSON
  const usuarios = require('./usuarios.json');
  
  //Seed que crea elementos por default
  sequelize.sync({ force: true }).then(async function() {
    await Promise.all(
      usuarios.map(usuarios => {
        usuario.create(usuarios);
      }),
    );
  });