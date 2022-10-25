const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Types = require("./types.models");

const Pokemons = db.define("pokemons", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  evolution: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  attack: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defense: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  speed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  //? Llave foranea de Users
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: {
      key: "id",
      model: Users,
    },
  },
  typeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "type_id",
    references: {
      key: "id",
      model: Types,
    },
  },
});

module.exports = Pokemons;
