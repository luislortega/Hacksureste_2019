//Dependencias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
//Puero del servidor
const port = 8082;
//Express
const app = express();
//Dependencias para construir el API
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
//rutas require('./config/routes')(app);
//Sincronizacion
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`👽 Backend corriendo en el puerto '${port}'`);
  });
});
