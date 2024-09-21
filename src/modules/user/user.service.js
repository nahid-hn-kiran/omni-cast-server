import { User } from './user.model.js';
import bcrypt from 'bcryptjs';

const createUserService = async (user) => {
  const newUser = new User(user);
  const result = await newUser.save();
  return result;
  // const payload = { user: { id: user.id } };
  // const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const loginUserService = async (email) => {
  return await User.findOne({ email: email });
};

export const UserService = {
  createUserService,
  loginUserService,
};
