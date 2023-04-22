import 'dotenv/config.js';
import express, { Application } from 'express';
import { Server } from 'socket.io';
import cors from 'cors';

import { videoRouter } from './routes/video.routes';
import { errorMiddleware } from './middlewares/error.middleware';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
);

app.use('/api/video', videoRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log('Started on port:', PORT));

export const io = new Server(server, {
  serveClient: false,
  cors: {
    origin: process.env.CLIENT_URL,
  },
});
