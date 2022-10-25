const typeControllers = require("./types.controller");

const getAllTypes = (req, res) => {
  typeControllers
    .getAllTypes()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
// /types/:id
const getTypeById = (req, res) => {
  const id = req.params.id;

  typeControllers
    .getTypeById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
// /types
const postType = (req, res) => {
  const { name } = req.body;

  if (name) {
    typeControllers
      .createType(name)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Missing data" });
  }
};

module.exports = {
  getAllTypes,
  getTypeById,
  postType,
};
