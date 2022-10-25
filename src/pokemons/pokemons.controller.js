const uuid = require("uuid");

const Pokemons = require("../models/pokemons.models");
const Users = require("../models/users.models");
const Types = require("../models/types.models");

const getAllPokemons = async (offset, limit) => {
  const data = await Pokemons.findAll({
    offset: offset,
    limit: limit,
    include: [
      {
        model: Users,
        as: "user",
        attributes: ["id", "firstName", "lastName", "email"],
      },
      {
        model: Types,
        as: "type",
      },
    ],
    attributes: {
      exclude: ["userId", "typeId", "createdAt", "updatedAt"],
    },
  });
  return data;
};

const getPokemonById = async (id) => {
  const data = await Pokemons.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["userId", "typeId", "createdAt", "updatedAt"],
    },
    include: [
      {
        model: Users,
        as: "user",
        attributes: ["id", "firstName", "lastName", "email"],
      },
      {
        model: Types,
        as: "type",
      },
    ],
  });
  return data;
};

const createPokemon = async (data) => {
  const response = await Pokemons.create({
    id: uuid.v4(),
    name: data.name,
    description: data.description,
    evolution: data.evolution,
    height: data.height,
    weight: data.weight,
    image: data.image,
    hp: data.hp,
    attack: data.attack,
    defense: data.defense,
    speed: data.speed,
    userId: data.userId,
    typeId: data.typeId,
  });
  return response;
};

const getPokemonsByType = async (typeId) => {
  const data = await Pokemons.findAll({
    where: {
      typeId,
    },
  });
  return data;
};

module.exports = {
  getAllPokemons,
  getPokemonById,
  createPokemon,
  getPokemonsByType,
};
