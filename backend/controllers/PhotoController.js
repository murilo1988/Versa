const Photo = require("../models/Photo");

const mongoose = require("mongoose");

//Insert a photo , with user related to it

const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  console.log(req.body);
  res.send("Foto inserida com sucesso");
};

module.exports = {
  insertPhoto,
};
