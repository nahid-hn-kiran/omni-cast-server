import express from 'express';
import { podcastController } from './podcast.controller.js';

const router = express.Router();

router
  .route('/podcasts')
  .post(podcastController.uploadPodcast)
  .get(podcastController.getAllPodcast);

router
  .route('/podcast/:id')
  .get(podcastController.getSinglePodcast)
  .put(podcastController.updateSinglePodcast)
  .delete(podcastController.deleteSinglePodcast);

export const PodcastRoute = router;
