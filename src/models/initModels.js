const Users = require("./users.models");
const Pokemons = require("./pokemons.models");
const Types = require("./types.models");

const initModels = () => {
  //* 1 -> M
  //? Una Publicacion, pertenece a un Usuario
  Pokemons.belongsTo(Users);
  //? Un usuario tiene muchas Publicaciones
  Users.hasMany(Pokemons);

  //* 1 -> M
  //? Una Publicación, pertenece a una Categoria
  Pokemons.belongsTo(Types);
  //? Una Categoria, tiene muchas Publicaciones
  Types.hasMany(Pokemons);
};

module.exports = initModels;
