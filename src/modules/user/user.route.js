import express from 'express';
import { UserController } from './user.controller.js';
import { protect, protectAdmin } from '../../middlewares/auth.middleware.js';
const router = express.Router();

router
  .route('/user')
  .get(protectAdmin, UserController.getAllUsers)
  .post(protectAdmin, UserController.createUser);

router
  .route('/user/:id')
  .get(protectAdmin, UserController.getSingleUser)
  .put(protectAdmin, UserController.updateSingleUser)
  .delete(protectAdmin, UserController.deleteSingleUser);

router.route('/user/login').post(UserController.loginUser);
router
  .route('/users/profile')
  .get(protect, UserController.getUserProfile)
  .put(protect, UserController.updateUserProfile);
// router.route('/users/admin').get(protect, UserController.getUserProfile);

export const UserRoute = router;
