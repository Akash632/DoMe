const express = require('express');
const { signUpController, loginController } = require('../Controllers/userController');

const userRouter = express.Router();

userRouter.post('/signUp',signUpController);

userRouter.post('/login',loginController);

module.exports = userRouter;