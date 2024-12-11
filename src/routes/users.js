const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;