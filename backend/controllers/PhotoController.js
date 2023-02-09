const Photo = require("../models/Photo");
const User = require("../models/User");

const mongoose = require("mongoose");

//Insert a photo , with user related to it

const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;
  const user = await User.findById(reqUser._id);

  // create a photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  //if photo was created successfully, return data
  if (!newPhoto) {
    res
      .status(422)
      .json({ errors: ["Houve algum erro tente novamente mais tarde."] });
    return;
  }

  res.status(201).json(newPhoto);
};

//remove a photo from DB
const deletePhoto = async (req, res) => {
  const { id } = req.params;
  const reqUser = req.user;

  try {
    const photo = await Photo.findById(mongoose.Types.ObjectId(id));

    // Check if photo exists
    if (!photo) {
      res.status(404).json("Foto não encontrada.");
      return;
    }
    //check if photo belong to user
    if (!photo.userId.equals(reqUser._id)) {
      res.status(422).json({
        errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
      });
    }
    await Photo.findByIdAndDelete(photo._id);

    res
      .status(200)
      .json({ id: photo._id, message: "Foto excluída com sucesso." });
  } catch (error) {
    res.status(404).json("Foto não encontrada.");
    return;
  }
};

// get all photos
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["creatdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

// Get photos by user
const getUserPhotos = async (req, res) => {
  const { id } = req.params;
  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

//get photos by id
const getPhotoById = async (req, res) => {
  const { id } = req.params;
  try {
    const photo = await Photo.findById(mongoose.Types.ObjectId(id));

    //check photo exists
    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada"] });
    }
    return res.status(200).json(photo);
  } catch (error) {
    res.status(422).json("Houve algum problema, por favor tente mais tarde.");
  }
};

//update a photo
const updatePhoto = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const reqUser = req.user;

  try {
    const photo = await Photo.findById(id);

    //check if photo exists
    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada."] });
      return;
    }
    //check if a pohto belongs to user
    if (!photo.userId.equals(reqUser._id)) {
      res
        .status(422)
        .json({ errors: ["Ocorreu um erro, por favor tente mais tarde."] });
      return;
    }
    if (title) {
      photo.title = title;
    }
    await photo.save();
    res.status(200).json({ photo, message: "Foto atualizada com sucesso" });
  } catch (error) {
    res.status(422).json("Houve um problema, por favor tente mais tarde.");
  }
};
//like functionlity
const likePhoto = async (req, res) => {
  const { id } = req.params;
  const reqUser = req.user;

  try {
    const photo = await Photo.findById(id);
    //check if photo exist
    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada"] });
      return;
    }

    //check if user already liked the photo
    if (!photo.likes.includes(reqUser._id)) {
      // put user id in array of like
      photo.likes.push(reqUser._id);
      res.status(200).json({
        photoID: id,
        userId: reqUser._id,
        message: "A foto foi curtida",
      });
    } else {
      photo.likes.remove(reqUser._id);

      res.status(202).json({
        photoID: id,
        userId: reqUser._id,
        message: "A foto foi descurtida",
      });
    }

    await photo.save();
  } catch (error) {
    res
      .status(422)
      .json({ errors: ["Ocorreu algum problema, por favor tente mais tarde"] });
  }
};

//Comment functionality
const commentInsert = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const reqUser = req.user;

  const user = await User.findById(reqUser._id);
  const photo = await Photo.findById(id);

  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada."] });
    return;
  }
  // create user Comment
  const userComment = {
    comment,
    userName: user.name,
    userImage: user.profileImage,
    userId: user._id,
  };
  try {
    //put comment on array of comments
    photo.comments.push(userComment);

    await photo.save();

    res.status(200).json({
      comment: userComment,

      message: "Comentário adicionado com sucesso",
    });
  } catch (error) {
    res
      .status(422)
      .json({ errors: ["Ocorreu um erro, por favor tente mais tarde"] });
  }
};

// search photos by title
const searchPhoto = async (req, res) => {
  const { q } = req.query;

  const photos = await Photo.find({ title: new RegExp(q, "i") }).exec();
  res.status(200).json(photos);
};

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  commentInsert,
  searchPhoto,
};
