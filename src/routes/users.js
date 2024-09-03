const router = require("express").Router();
const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  editUser,
} = require("../controllers/users");

router.get("/users", getUsers);
router.get("/users", getUser);
router.get("/users/:user_id", getUsers);
router.post("/users", createUser);
router.patch("/users/:user_id", editUser);
router.delete("/users/:user_id", deleteUser);


module.exports={router};