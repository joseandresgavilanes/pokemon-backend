const pokemonControllers = require("./pokemons.controller");
const { host } = require("../config");

const getAllPokemons = (req, res) => {
  //? localhost:3000/api/v1/pokemons?offset=0&limit=20
  const offset = Number(req.query.offset) || 0;
  //! const offset = req.query.offset ? req.query.offset : 0
  const limit = Number(req.query.limit) || 10;
  //? offset: donde inicia
  //? limit: cantidad maxima de entidades a mostrar por pagina

  const urlBase = `${host}/api/v1/pokemons`;

  pokemonControllers
    .getAllPokemons(offset, limit)
    .then((data) => {
      res.status(200).json({
        next: `${urlBase}?offset=${offset + limit}&limit=${limit}`,
        prev: `${urlBase}`,
        offset,
        limit,
        results: data,
      });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getPokemonById = (req, res) => {
  const id = req.params.id;
  pokemonControllers
    .getPokemonById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(404).json({ message: err.message }));
};

const createPokemon = (req, res) => {
  //? Este es el id del usuario loggeado
  const userId = req.user.id;
  const {
    name,
    description,
    evolution,
    height,
    weight,
    image,
    hp,
    attack,
    defense,
    speed,
    typeId,
  } = req.body;
  if (
    name &&
    description &&
    evolution &&
    height &&
    weight &&
    image &&
    hp &&
    attack &&
    defense &&
    speed &&
    typeId
  ) {
    pokemonControllers
      .createPokemon({
        name,
        description,
        evolution,
        height,
        weight,
        image,
        hp,
        attack,
        defense,
        speed,
        typeId,
        userId,
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        name: "string",
        description: "string",
        evolution: "string",
        height: "integer",
        weight: "integer",
        image: "string",
        hp: "integer",
        attack: "integer",
        defense: "integer",
        speed: "integer",
        typeId: "uuid",
      },
    });
  }
};

const getPokemonsByType = (req, res) => {
  const typeId = req.params.id;
  pokemonControllers
    .getPokemonsByType(typeId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonsByType,
  createPokemon,
};
