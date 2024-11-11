import { Podcast } from './podcast.model.js';

const uploadPodcastService = async (podcastData) => {
  const podcast = new Podcast(podcastData);
  return podcast.save();
};

const getAllPodcastService = async () => {
  return await Podcast.find();
};

const getSinglePodcastService = async (id) => {
  return await Podcast.findOne({ _id: id });
};

const deleteSinglePodcastService = async (id) => {
  return await Podcast.findByIdAndDelete(id);
};

const updateSinglePodcastService = async (id, updatedData) => {
  return await Podcast.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

export const podcastServices = {
  uploadPodcastService,
  getAllPodcastService,
  getSinglePodcastService,
  deleteSinglePodcastService,
  updateSinglePodcastService,
};
