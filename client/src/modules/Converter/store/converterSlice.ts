import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  format: 'mp4',
  quality: '360',
  fps: '24',
  audio: '2',
  duration: {
    start: '00:00:00',
    end: '00:00:00',
  },
};

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setStartVideo: (state, action: PayloadAction<string>) => {
      state.duration.start = action.payload;
    },
    setEndVideo: (state, action: PayloadAction<string>) => {
      state.duration.end = action.payload;
    },
    changeFormat: (state, action: PayloadAction<string>) => {
      state.format = action.payload;
    },
    changeQuality: (state, action: PayloadAction<string>) => {
      state.quality = action.payload;
    },
    changeFps: (state, action: PayloadAction<string>) => {
      state.fps = action.payload;
    },
    changeAudio: (state, action: PayloadAction<string>) => {
      state.audio = action.payload;
    },
    resetSettingsStore: () => initialState,
  },
});

export const converterReducer = converterSlice.reducer;
export const converterAction = converterSlice.actions;
