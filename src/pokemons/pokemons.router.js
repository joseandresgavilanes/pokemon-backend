const router = require("express").Router();
const passport = require("passport");

const pokemonServices = require("./pokemons.services");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(pokemonServices.getAllPokemons)
  .post(
    passport.authenticate("jwt", { session: false }),
    pokemonServices.createPokemon
  );

router.route("/:id").get(pokemonServices.getPokemonById);

module.exports = router;
