import { extname } from 'path';

import { Request, Express } from 'express';
import { FileFilterCallback } from 'multer';

import { ACCEPTED_SETTINGS_VIDEO_FORMATS } from '../constants/video.constant';

export const videoFilter = (
  request: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback,
) => {
  const ext = extname(file.originalname).slice(1);

  if (!ACCEPTED_SETTINGS_VIDEO_FORMATS.includes(ext)) {
    return callback(null, false);
  }

  callback(null, true);
};
