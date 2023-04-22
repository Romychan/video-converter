import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { videoAction } from '../store/video/videoSlice';
import { converterAction } from '@modules/Converter/store/converterSlice';

const rootActions = { ...videoAction, ...converterAction };

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
