import { check } from 'express-validator';

import {
  ACCEPTED_VIDEO_FORMATS,
  ACCEPTED_VIDEO_QUALITY,
  ACCEPTED_VIDEO_FPS,
  ACCEPTED_VIDEO_AUDIO,
} from '../constants/video.constant';

const timeRegex = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

export const fileValidationRules = () => {
  return [
    check('format')
      .isIn(ACCEPTED_VIDEO_FORMATS)
      .exists()
      .withMessage('Not valid value for format'),
    check('quality')
      .isIn(ACCEPTED_VIDEO_QUALITY)
      .exists()
      .withMessage('Not valid value for quality'),
    check('fps')
      .isIn(ACCEPTED_VIDEO_FPS)
      .exists()
      .withMessage('Not valid value for quality'),
    check('start')
      .notEmpty()
      .isString()
      .exists()
      .matches(timeRegex)
      .withMessage('Not valid value for time start video'),
    check('end')
      .notEmpty()
      .isString()
      .exists()
      .matches(timeRegex)
      .withMessage('Not valid value for time end video'),
    check('audio')
      .isIn(ACCEPTED_VIDEO_AUDIO)
      .exists()
      .withMessage('Not valid value for audio'),
  ];
};
