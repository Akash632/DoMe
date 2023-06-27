const express = require('express');
const { signUpController, loginController } = require('../Controllers/userController');

const router = express.Router();

router.post('/signUp',signUpController);

router.post('/login',loginController);

module.exports = router;