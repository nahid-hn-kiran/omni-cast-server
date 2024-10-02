import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minLength: [3, 'Name must be at least 3 charecters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: [validator.isEmail, 'Please Provide a valid Email'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      validate: {
        validator: function (value) {
          return validator.isStrongPassword(value, {
            minLength: 8,
          });
        },
        message: 'please provide a strong password.ex:abc123@A',
      },
    },
    confirmPassword: {
      type: String,
      required: [true, 'Confirm password is required'],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "password and confirm password doesn't match",
      },
    },
    imgURL: {
      type: String,
      required: true,
      default:
        'http://1.gravatar.com/avatar/1ec59eae354306975b17d78e8473d78b?s=90&d=mm&r=g',
      validate: {
        validator: function (value) {
          return validator.isURL(value);
        },
        message: 'Image not found',
      },
    },
    role: {
      type: String,
      requierd: true,
      default: 'user',
      enum: ['user', 'admin', 'super-admin'],
    },
    status: {
      type: 'String',
      required: true,
      default: 'active',
      enum: ['active', 'disabled'],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

export const User = mongoose.model('User', userSchema);
