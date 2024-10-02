import { podcastServices } from './podcast.service.js';

const uploadPodcast = async (req, res) => {
  try {
    const result = await podcastServices.uploadPodcastService(req.body);
    res.status(200).json({
      success: true,
      message: 'Podcast uploaded Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getAllPodcast = async (req, res) => {
  try {
    const result = await podcastServices.getAllPodcastService();
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getSinglePodcast = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await podcastServices.getSinglePodcastService(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const deleteSinglePodcast = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await podcastServices.deleteSinglePodcastService(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const updateSinglePodcast = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await podcastServices.updateSinglePodcastService(
      id,
      updatedData
    );
    if (!result) {
      res.status(404).json({ success: false, message: 'Podcast not found' });
    }
    res.status(500).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const podcastController = {
  uploadPodcast,
  getAllPodcast,
  getSinglePodcast,
  deleteSinglePodcast,
  updateSinglePodcast,
};
