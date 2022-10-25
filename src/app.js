//? Dependencies
const express = require("express");
const db = require("./utils/database");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

//? Files
const { port } = require("./config");
//* Routes
const userRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const typeRouter = require("./types/types.router");
const pokemonsRouter = require("./pokemons/pokemons.router");

const initModels = require("./models/initModels");

//? Initial Configs
const app = express();
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Database Authenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database Synced");
  })
  .catch((err) => {
    console.log(err);
  });

initModels();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OK!",
    users: `localhost:${port}/api/v1/users`,
  });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/types", typeRouter);
app.use("/api/v1/pokemons", pokemonsRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
