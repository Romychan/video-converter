import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  uri: '',
  extension: '',
  duration: '00:00:00',
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setInputVideo: (
      state,
      action: PayloadAction<{ uri: string; extension: string }>,
    ) => {
      state.uri = action.payload.uri;
      state.extension = action.payload.extension;
    },
    setDuration: (state, action: PayloadAction<string>) => {
      state.duration = action.payload;
    },
    resetVideoStore: () => initialState,
  },
});

export const videoReducer = videoSlice.reducer;
export const videoAction = videoSlice.actions;
