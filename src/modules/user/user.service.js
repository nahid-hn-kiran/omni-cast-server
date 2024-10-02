import { User } from './user.model.js';
import bcrypt from 'bcryptjs';

const createUserService = async (user) => {
  const existsUser = await User.findOne({ email: user.email });
  if (existsUser) {
    throw new Error({
      message: 'You already have an account. Please Register',
    });
  }
  const newUser = new User(user);
  const result = await newUser.save();
  return result;
  // const payload = { user: { id: user.id } };
  // const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const loginUserService = async (email) => {
  const existsUser = await User.findOne({ email: email });
  if (!existsUser) {
    throw new Error({ message: 'No User found. Please Register' });
  }
  return await User.findOne({ email: email });
};

const getAllUserService = async () => {
  return await User.find();
};

const getSingleUserService = async (id) => {
  return await User.findOne({ _id: id });
};

const deleteSingleUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};

const updateSingleUserService = async (id, updatedData) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error({ message: 'No User found.' });
  }
  if (!updatedData.imgURL) {
    updatedData.imgURL = user.imgURL;
  }
  return await User.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

export const UserService = {
  createUserService,
  loginUserService,
  getAllUserService,
  getSingleUserService,
  deleteSingleUserService,
  updateSingleUserService,
};
