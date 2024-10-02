import express from 'express';
import { UserController } from './user.controller.js';
const router = express.Router();

router
  .route('/user')
  .get(UserController.getAllUsers)
  .post(UserController.createUser);

router
  .route('/user/:id')
  .get(UserController.getSingleUser)
  .put(UserController.updateSingleUser)
  .delete(UserController.deleteSingleUser);

router.route('/user/login').post(UserController.loginUser);

export const UserRoute = router;
