import fs from 'fs';
import { validationResult } from 'express-validator';

import { Request, Response, NextFunction } from 'express';

import ApiError from '../exceptions/api.exception';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  if (req.file) {
    fs.unlink(req.file.path, (error) => {
      if (error) {
        throw ApiError.badRequest('Error deleting input video');
      }
    });
  }

  console.log(errors);

  throw ApiError.badRequest('Validation Error', []);
};
