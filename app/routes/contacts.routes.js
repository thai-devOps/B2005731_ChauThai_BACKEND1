const express = require("express");
const {
  findAll,
  create,
  deleteAll,
  findAllFavorite,
  findOne,
  update,
  deleteOne,
} = require("../controllers/contacts.controller");

const router = express.Router();

router.route("/").get(findAll).post(create).delete(deleteAll);

router.route("/favorite").get(findAllFavorite);

router.route("/:id").get(findOne).put(update).delete(deleteOne);

module.exports = router;
