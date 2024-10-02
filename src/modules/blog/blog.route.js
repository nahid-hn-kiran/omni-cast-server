import express from 'express';
import { blogController } from './blog.controller.js';

const router = express.Router();

router
  .route('/blogs')
  .post(blogController.uploadBlog)
  .get(blogController.getAllBlog);

router
  .route('/blog/:id')
  .get(blogController.getSingleBlog)
  .delete(blogController.deleteSingleBlog)
  .put(blogController.updateSingleBlog);

export const BlogRoute = router;
