const express = require('express');
const app = express();
const userController = require('../controller/user.controller');
const router = express.Router();
router.get('/',userController.getUser);
router.post('/',userController.addUser);

module.exports = router;
