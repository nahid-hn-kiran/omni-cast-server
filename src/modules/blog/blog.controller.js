import { Blog } from './blog.model.js';
import { blogServices } from './blog.service.js';

const uploadBlog = async (req, res) => {
  try {
    const result = await blogServices.uploadBlogService(req.body);
    res.status(200).json({
      success: true,
      message: 'Blog uploaded Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getAllBlog = async (req, res) => {
  try {
    const result = await blogServices.getAllBlogService();
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await blogServices.getSingleBlogService(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const deleteSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await blogServices.deleteSingleBlogService(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const updateSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await blogServices.updateSingleBlogService(id, updatedData);
    if (!result) {
      res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(500).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const blogController = {
  uploadBlog,
  getAllBlog,
  getSingleBlog,
  deleteSingleBlog,
  updateSingleBlog,
};
