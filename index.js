// Importamos librerias
const express = require("express");
const debug = require("debug")("app:main");

//Importamos Modulos otro Archivos
const { Config } = require("./src/config/index");
const { IndexAPI } = require("./src/index/index");
const app = express();

app.use(express.json());
// Ruta Web Principal
IndexAPI(app);

app.listen(Config.port, () => {
  debug(`Servidor Escuchando en el puerto ${Config.port}`);
});
