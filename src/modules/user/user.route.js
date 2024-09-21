import express from 'express';
import { UserController } from './user.controller.js';
const router = express.Router();

router
  .route('/users')
  .get(UserController.getAllUsers)
  .post(UserController.createUser);

router.route('/user/login').post(UserController.loginUser);

export const UserRoute = router;
