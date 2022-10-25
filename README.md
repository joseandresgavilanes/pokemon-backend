<div align="center">
  <img alt="logo"  src="../pokedex-frontend/public/images/Home/smiley.png">
</div>

<h3 align="center">
    Code challenge based on the famous Pokémon anime! With NodeJs, Express and PostgreSQL 💻🚀
</h3>

<p align="center">
  <a href="#about-the-project">About The Project</a> |
  <a href="#pokemon-example">Pokemon Example</a> |
  <a href="#technologies">Technologies</a> |
  <a href="#contribution">Contribution</a> |
  <a href="#author">Author</a> |
</p>

---

**NOTE:** This is a companion to a React Based Web-App currently in development (https://fantastic-naiad-78a9d5.netlify.app/).
This API is built using Node.js, Express and a PostgreSQL Database.
Pokedex API seeks to fufill the functional support of apps that require user authentication to access Pokemons and Types creation functionalities.
The API also accesses information about pokemon like basic stats and description [pokeapi.co](https://pokeapi.co/).
Aditionally **_ALL_** endpoints of the API will use ------- as a base url.

<!-- [https://poke-team-node.herokuapp.com/](https://poke-team-node.herokuapp.com/) -->

To access an endpoint simply append an endpoint to the base url.
For instance to access the `/pokemons` endpoint the full url will look like this:

`------`

<!-- `https://poke-team-node.herokuapp.com/teams/all` -->

---

<h2 id="about-the-project" > ⏰📈 About The Project </h2>

- Frontend Requirements:

  - ✔ Show 10 pokemon on the main page.
  - ✔ Have a search section (bar) by pokemon name.
  - ✔ Implement a button to show more details of the pokemon
  - ✔ Pressing the details button shows more information about the pokemon
    selected.
  - ✔ The information to be displayed is optional, it must show at least 3 additional data.
  - ✔ Use of Routing for the previous point.

- Backend Requirements:
  - ✔ Design the database for the Pokemon API, this will consist of the following attributes as a minimum (you ✔ can add more) Name, description, type, evolution, height, weight.
  - ✔ Use the main HTTP methods: GET
  - ✔ Required fields are name and description.
  - ✔ All responses must be in JSON format.
  - ✔ Use swagger for documentation

<h2 id="pokemon-example" > 🎇 Pokemon example </h2>

```json
{
  "total": 68,
  "prev": "localhost:9000/api/v1/pokemons?start=51&limit=60",
  "next": "localhost:9000/api/v1/pokemons?start=61&limit=68",
  "data": [
    {
      "id": "a860986d-2570-4f39-afe6-c30fb74f350e",
      "name": "K-maleon",
      "description": "Kruger Corp pet",
      "evolution": "K-Godzilla",
      "height": 10,
      "weight": 20,
      "image": "https://krugercorp.com/wp-content/uploads/2022/09/Kmaleon-1-567x1024.png",
      "hp": 200,
      "attack": 200,
      "defense": 200,
      "speed": 200,
      "userId": {
        "id": "5b7cc060-3597-4946-bb9b-3a54e2098f82",
        "name": "Ernesto Kruger"
      },
      "typeId": {
        "id": 4,
        "name": "K-extraordinary"
      }
    }
  ]
}
```

---

## 🚀 Getting Started

First, run the development server:

```bash
# Clone Repository
$ git clone https://github.com/joseandresgavilanes/pokedex-fullstack.git
# Go to server folder
$ cd pokedex-backend
# Install Dependencies
$ npm i
# Complete you .env file (Use example.env as a guide)
# Run Aplication
$ npm run dev

```

---

## User Functionalities

User access and authentication are provisioned through the use of json web tokens (a.k.a. jwt).
Although this api provisions users, some endpoints do not require a user to be logged in.

### Create User Endpoints

**NOTE:** That ":id" refers to a user account's unique identifier in the database.

| HTTP Verb | Endpoint      | Function                                                                             |
| --------- | ------------- | ------------------------------------------------------------------------------------ |
| POST      | auth/register | Creates a User account based on user input. Also provisions a jwt to user as cookie. |
| POST      | auth/login    | Validates User account then provisions a jwt to a valid, existing user as cookie.    |

#### Register Example

```JSON
// All properties are REQUIRED inputs.
{
  "firstName": "Jose",
  "lastName": "Gavilanes",
  "email": "jose@kmail.com",
  "password": "futur3__k-star",
  "phone": "+521231231231",
  "birthday": "2004/04/30",
}
```

#### Login Example

```JSON
// All properties are REQUIRED inputs.
{
  "email": "jose@kmail.com",
  "password": "futur3__k-star"
}
```

---

### Users Endpoints

**NOTE:** That ":id" refers to a user account's unique identifier in the database.

| HTTP Verb      | Endpoint   | Function                                                  |
| -------------- | ---------- | --------------------------------------------------------- |
| GET            | /users     | Allows user to see all accounts info if logged in.        |
| GET            | /users/:id | Allows user to see an specific account info if logged in. |
| PATCH (ADMIN)  | /users/:id | Allows an admin to update an account info if logged in.   |
| DELETE (ADMIN) | /users/:id | Allows an admin to delete an account if logged in.        |

```JSON
// All properties are REQUIRED inputs.
{
  "firstName": "Jose",
  "lastName": "Gavilanes",
  "email": "jose@kmail.com",
  "password": "futur3__k-star",
  "phone": "+521231231231",
  "birthday": "2004/04/30",
}

```

#### Users/me Endpoints

**NOTE:** That "me" refers to a user account's unique identifier in the database. The user will be able to EDIT and DELETE his/her data, but not the data of another user.

| HTTP Verb | Endpoint  | Function                                                 |
| --------- | --------- | -------------------------------------------------------- |
| GET       | /users/me | Allows user to see his/her account info if logged in.    |
| PATCH     | /users/me | Allows user to update his/her account info if logged in. |
| DELETE    | /users/me | Allows user to delete his/her account if logged in.      |

---

## Types Functionalities

Types are resources available to be seen to anyone, any user can create a Type.

**NOTE:** That ":id" refers to a type's unique identifier in the database.

### Types Endpoints (No Account Required)

| HTTP Verb | Endpoint   | Function                                                |
| --------- | ---------- | ------------------------------------------------------- |
| GET       | /types     | Returns a result of all types in the database.          |
| GET       | /types/:id | Returns one type from the database according to its id. |

#### Example Type

```JSON
// All properties are REQUIRED inputs.

{
  "name": "grass",
}
```

### Types Endpoints (Requires User Login)

| HTTP Verb | Endpoint | Function                                     |
| --------- | -------- | -------------------------------------------- |
| POST      | /types   | Creates a new Type but requires a type name. |

<!-- | PATCH     | /api/team/:teamId/pokemon | Modifies what pokemon are inside the team.                                    |
| PUT       | /api/team/:teamId         | Updates team info like name and description, but not pokemon inside the team. |
| DELETE    | /api/team/:teamId         | Deletes team from database.                                                   | -->

---

## Pokemons Functionalities

Pokemons are resources available to be seen to anyone, any user can create a Pokemon.

**NOTE:** That ":id" refers to a pokemon's unique identifier in the database.

### Pokemons Endpoints (No Account Required)

| HTTP Verb | Endpoint      | Function                     |
| --------- | ------------- | ---------------------------- |
| GET       | /pokemons     | Returns all pokemons.        |
| GET       | /pokemons/:id | Returns an specific pokemon. |

### Pokemons Endpoints (Requires User Login)

| HTTP Verb | Endpoint  | Function               |
| --------- | --------- | ---------------------- |
| POST      | /pokemons | Creates a new Pokemon. |

#### Example Pokemon

```JSON
// All properties are REQUIRED inputs.

{
  "name": "K-maleon",
  "description": "Kruger Corp pet",
  "evolution": "K-Godzilla",
  "height": 10,
  "weight": 20,
  "image": "https://krugercorp.com/wp-content/uploads/2022/09/Kmaleon-1-567x1024.png",
  "hp": 200,
  "attack": 200,
  "defense": 200,
  "speed": 200
}
```

---

<h2 id="technologies"> 🛠 Technologies </h2>

The following tools were used in the construction of the project:

- **[NodeJS](https://nodejs.org/en/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Express](https://expressjs.com/)**
- **[JWT](https://jwt.io/)**

---

<h2 id="contribution"> 💪 Contribution </h2>

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<h2 id="author"> 💻 Author </h2>

<img style="border-radius: 50% !important;" src="../pokedex-frontend/public/images/Home/pepe.jpg" width="100px;" alt="photo author"/>

<sub><b>José Andrés Gavilanes - Smiley</b></sub></a> <a href="https://www.linkedin.com/in/jose-andres-gavilanes-2954691b5/" title="jose`s linkedin">🚀</a>
<br />
[![Linkedin Badge](https://img.shields.io/badge/-Jose-1692B4?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/kelwyoliveira/)](https://www.linkedin.com/in/jose-andres-gavilanes-2954691b5/)
[![Gmail Badge](https://img.shields.io/badge/-joseandresgavilanes2012@gmail.com-4682B4?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:joseandresgavilanes2012@gmail.com)](mailto:joseandresgavilanes2012@gmail.com)
