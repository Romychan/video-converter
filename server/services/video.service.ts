import Ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';

import { Express } from 'express';
import { VideoFiles, VideoSettings } from '../types/video.type';

import { io } from '../app';
import ApiError from '../exceptions/api.exception';

class VideoService {
  static async convertVideo (
    file: Express.Multer.File,
    settings: VideoSettings,
  ): Promise<VideoFiles> {
    const { format, quality, fps, start, end, audio } = settings;

    const inputFile = file.path;
    const outputFile = `${process.env.UPLOAD_PATH}output.${format}`;

    const audioSettings = audio === '0' ? '-an' : `-ac ${audio}`;
    const endVideoTime = `-to ${end}`;

    return new Promise((resolve, reject) => {
      Ffmpeg(inputFile)
        .toFormat(format)
        .size(`?x${quality}`)
        .fps(+fps)
        .setStartTime(start)
        .inputOptions([endVideoTime, audioSettings])
        .on('progress', (progress) => {
          io.sockets.emit('progress', progress.percent);
        })
        .on('error', (error) => {
          fs.unlink(inputFile, (error) => {
            if (error) {
              throw ApiError.badRequest('Error during video conversion');
            }
          });

          reject(error);
        })
        .on('end', () => {
          fs.unlink(inputFile, (error) => {
            if (error) {
              throw ApiError.badRequest('Error deleting input video');
            }
          });

          io.sockets.disconnectSockets();

          resolve({ outputFile });
        })
        .saveToFile(outputFile);
    });
  }
}

export default VideoService;
