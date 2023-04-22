import { Navigate } from 'react-router-dom';

import { CONVERT_PATH, DEFAULT_PATH, UPLOAD_PATH } from './routes';

import { ConverterPage } from '../pages/ConverterPage';
import { UploadPage } from '../pages/UploadPage';

export const APP_ROUTES = [
  { path: CONVERT_PATH, element: <ConverterPage /> },
  { path: UPLOAD_PATH, element: <UploadPage /> },
  { path: '*', element: <Navigate to={DEFAULT_PATH} replace /> },
];
