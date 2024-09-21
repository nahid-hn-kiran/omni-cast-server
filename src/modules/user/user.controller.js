import { User } from './user.model.js';
import { UserService } from './user.service.js';

const createUser = async (req, res) => {
  try {
    const result = await UserService.createUserService(req.body);
    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ messgae: 'Please provide your credentials' });
    }
    const existsUser = await User.findOne({ email: email });
    if (!existsUser) {
      return res
        .status(404)
        .json({ message: 'No user found. Please Register' });
    }
    const user = await UserService.loginUserService(email);
    const isPasswordValid = user.comparePassword(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Wrong Password' });
    }
    const { password: pass, ...others } = user.toObject();
    res.status(200).json({
      success: true,
      message: 'Successfully Logged in',
      data: others,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  res.send('Here is your all users');
};

export const UserController = {
  createUser,
  getAllUsers,
  loginUser,
};
