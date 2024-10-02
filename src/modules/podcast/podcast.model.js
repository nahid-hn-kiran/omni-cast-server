import mongoose from 'mongoose';
import validator from 'validator';

const podcastSchema = mongoose.Schema(
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
    shortDescription: {
      type: String,
      required: [true, 'Short description is required'],
      trim: true,
      maxLength: [100, 'Short description cannot exceed 100 characters'],
    },
    longDescription: {
      type: String,
      required: [true, 'Long description is required'],
      trim: true,
    },
    podcast: {
      type: String,
      required: [true, 'Audio file URL is required'],
      validate: {
        validator: function (value) {
          return validator.isURL(value);
        },
        message: 'Invalid audio URL',
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Podcast = mongoose.model('Podcast', podcastSchema);
