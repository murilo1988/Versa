const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O título é obrigatório.")
      .isString()
      .withMessage("o título é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O título precisa de no mínimo 3 caracteres."),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("A imagem é obrigatória.");
      }
      return true + "Imagem inserida com sucesso";
    }),
  ];
};

const photoUpdateValidation = () => {
  return [
    body("title")
      .optional()
      .isString()
      .withMessage("Por favor inserir um título.")
      .isLength({ min: 3 })
      .withMessage("O título precisa de no mínimo 3 caracteres."),
  ];
};

const commentPhotoValidation = () => {
  return [
    body("comments").isString().withMessage("Por favor inserir um comentário"),
  ];
};

module.exports = {
  photoInsertValidation,
  photoUpdateValidation,
  commentPhotoValidation,
};
