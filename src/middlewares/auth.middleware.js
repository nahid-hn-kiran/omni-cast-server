import jwt from 'jsonwebtoken';
import { User } from '../modules/user/user.model.js';

export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
      req.user = await User.findOne({ email: decoded.email }).select(
        '-password'
      );
      if (!req.user) {
        return res.status(401).json({ message: 'User not found.' });
      }
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized.' });
    }
  }
  if (!token) {
    res.status(401).json({ message: 'Not authorized' });
  }
};

export const protectAdmin = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
      req.user = await User.findOne({ email: decoded.email }).select(
        '-password'
      );
      if (!req.user) {
        return res.status(401).json({ message: 'User not found.' });
      }
      if (!req.user.role === 'super-admin') {
        res.status(401).json({ message: 'Not authorized.' });
      }
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized.' });
    }
  }
  if (!token) {
    res.status(401).json({ message: 'Not authorized' });
  }
};
