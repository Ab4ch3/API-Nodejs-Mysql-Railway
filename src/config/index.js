require("dotenv").config();

module.exports.Config = {
  port: process.env.PORT || 3000, //en caso de que no cosig aen el . env colocara 3000 por defecto
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASS,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DATABASE,
};
