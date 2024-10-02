import express from 'express';
import cors from 'cors';
import { UserRoute } from './modules/user/user.route.js';
import { PodcastRoute } from './modules/podcast/podcast.route.js';
import { BlogRoute } from './modules/blog/blog.route.js';

// Express App
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1', [UserRoute, PodcastRoute, BlogRoute]);
// app.use('/api/podcast', PodcastRoute);
// app.use('/api/blog', BlogRoute);

export default app;
