import mongoose from 'mongoose';
import validator from 'validator';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minLength: [10, 'Title must be at least 10 characters'],
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail URL is required'],
      validate: {
        validator: function (value) {
          return validator.isURL(value);
        },
        message: 'Invalid thumbnail URL',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.model('Blog', blogSchema);
