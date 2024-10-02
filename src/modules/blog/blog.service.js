import { Blog } from './blog.model.js';

const uploadBlogService = async (blogData) => {
  const blog = new Blog(blogData);
  return blog.save();
};

const getAllBlogService = async () => {
  return Blog.find();
};

const getSingleBlogService = async (id) => {
  return await Blog.findOne({ _id: id });
};

const deleteSingleBlogService = async (id) => {
  return await Blog.findOneAndDelete(id);
};

const updateSingleBlogService = async (id, updatedData) => {
  return await Blog.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

export const blogServices = {
  uploadBlogService,
  getAllBlogService,
  getSingleBlogService,
  deleteSingleBlogService,
  updateSingleBlogService,
};
