const express = require("express");
const {
  createUser,
  getUsers,
  editUser,
  deleteUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/").post(createUser).get(getUsers);
router.route("/:id").put(editUser).delete(deleteUser);
module.exports = router;
