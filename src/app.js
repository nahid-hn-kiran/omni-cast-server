import express from 'express';
import cors from 'cors';
import { UserRoute } from './modules/user/user.route.js';

// Express App
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', UserRoute);

export default app;
