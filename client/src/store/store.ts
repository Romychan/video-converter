import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import { videoSlice, videoReducer } from './video/videoSlice';
import { converterSlice, converterReducer } from '../modules/Converter';
import { converterApi } from '../modules/Converter';

const rootReducers = combineReducers({
  [videoSlice.name]: videoReducer,
  [converterSlice.name]: converterReducer,
  [converterApi.reducerPath]: converterApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducers,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        converterApi.middleware,
      ]),
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
