import { UserService } from './user.service.js';
import jwt from 'jsonwebtoken';

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
      return res.status(401).json({ error: 'Please provide your credentials' });
    }
    const user = await UserService.loginUserService(email);
    const isPasswordValid = user.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Wrong Password' });
    }
    const { password: pass, ...others } = user.toObject();
    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
      expiresIn: '7d',
    });
    res.status(200).json({
      success: true,
      message: 'Successfully Logged in',
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUserService();
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.getSingleUserService(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const deleteSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserService.deleteSingleUserService(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const updateSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await UserService.updateSingleUserService(id, updatedData);
    if (!user) {
      res.status(404).json({ success: false, message: 'No User found' });
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const id = req.body.id;
    const updatedUser = req.body.updatedUser;
    const result = await UserService.updateSingleUserService(id, updatedUser);
    if (!user) {
      res.status(404).json({ success: false, message: 'No User found' });
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  loginUser,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
  getUserProfile,
  updateUserProfile,
};
