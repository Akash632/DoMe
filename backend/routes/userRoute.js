const express = require('express');
const { signUpController, loginController } = require('../Controllers/userController');

const userRouter = express.Router();

router.post('/signUp',signUpController);

router.post('/login',loginController);

module.exports = userRouter;