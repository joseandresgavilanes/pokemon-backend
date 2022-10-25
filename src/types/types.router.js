const router = require("express").Router();

const typeServices = require("./types.services");
const { getPokemonsByType } = require("../pokemons/pokemons.services");

router
  .route("/") //? /api/v1/types
  .get(typeServices.getAllTypes)
  .post(typeServices.postType);

//? /api/v1/types/:id
router.get("/:id", typeServices.getTypeById);
router.get("/:id/pokemons", getPokemonsByType);

module.exports = router;
