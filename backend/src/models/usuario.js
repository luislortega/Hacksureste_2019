//Generacion del password encriptado
function generateCode(user, options) {
  let random = Math.floor(Math.pow(10, 5-1) + Math.random() * 9 * Math.pow(10, 5-1));
  return user.setDataValue('codigo_verificacion', random);
}

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    'usuario',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      nombres: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      latitud: DataTypes.STRING,
      longitud: DataTypes.STRING,
      num_servicios: DataTypes.INTEGER,
      codigo_verificacion: DataTypes.INTEGER, //4 numeros random
    },
    {
      hooks: {
        beforeSave: generateCode,
      },
    },
  );
  return usuario;
};
