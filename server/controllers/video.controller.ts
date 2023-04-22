import fs from 'fs';

import { Request, Response, NextFunction } from 'express';

import VideoService from '../services/video.service';
import ApiError from '../exceptions/api.exception';

class VideoController {
  static async convertVideo (req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        return next(ApiError.badRequest('Validation Error', []));
      }

      const result = await VideoService.convertVideo(
        req.file,
        req.body,
      );
      const convertedFilePath = result.outputFile;

      return res.status(200).download(convertedFilePath, () => {
        fs.unlink(convertedFilePath, (error) => {
          if (error) {
            throw ApiError.badRequest('Error deleting output video');
          }
        });
      });
    } catch (e) {
      next(e);
    }
  }
}

export default VideoController;
