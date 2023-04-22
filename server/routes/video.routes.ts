import express from 'express';

import VideoController from '../controllers/video.controller';
import { uploadVideo } from '../middlewares/upload.middleware';
import { validate } from '../middlewares/validate.middleware';
import { fileValidationRules } from '../validation/file.validation';

export const videoRouter = express.Router();

videoRouter.post(
  '/convert',
  uploadVideo.single('file'),
  fileValidationRules(),
  validate,
  VideoController.convertVideo,
);
