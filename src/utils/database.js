const { Sequelize } = require("sequelize");
const config = require("../config");

/*
const db = new Sequelize({
  dialect: "postgres",
  host: config.db.host, //? Variable de entorno del host
  username: config.db.username, //? Variable de entorno del usuario
  password: config.db.password, //? Variable de entorno de la contraseña
  database: config.db.dbName, //? Variable de entorno de la base de datos
  ssl: true,
  dialectoptions:
    config.nodeEnv === "production"
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
});
*/
module.exports = {
  development: {
    username: config.db.development.username,
    password: config.db.development.password,
    database: config.db.development.database,
    host: "127.0.0.1",
    dialect: config.db.development.dialect,
  },
  test: {
    username: config.db.test.username,
    password: config.db.test.password,
    database: config.db.test.database,
    host: "127.0.0.1",
    dialect: config.db.test.dialect,
  },
  production: {
    url: config.db.production.url,
    use_env_variable: config.db.production.url,
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  },
};
