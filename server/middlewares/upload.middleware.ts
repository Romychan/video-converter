import { existsSync, mkdirSync } from 'fs';
import multer from 'multer';

import { Request, Express } from 'express';
import { DestinationCallback, FileNameCallback } from '../types/video.type';

import { videoFilter } from '../utils/videoFilter.util';

const storage = multer.diskStorage({
  destination: async (
    req: Request,
    file: Express.Multer.File,
    callback: DestinationCallback,
  ) => {
    const dirPath = process.env.UPLOAD_PATH as string;

    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }

    callback(null, dirPath);
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    callback: FileNameCallback,
  ) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    callback(null, fileName);
  },
});

const maxSize = 10000 * 1024 * 1024;

export const uploadVideo = multer({
  storage,
  limits: { fileSize: maxSize },
  fileFilter: videoFilter,
});
