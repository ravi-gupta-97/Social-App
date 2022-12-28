import express from 'express';
import { getUser, login, signup } from '../controllers/user-controller.js';
const userRouter = express.Router();

userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.get('/:id',getUser);

export default userRouter;