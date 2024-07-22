import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  galleries: [],
  status: 'idle',
  error: null,
};

export const fetchGalleries = createAsyncThunk('gallery/fetchGalleries', async () => {
  const response = await axios.get('http://localhost:3001/gallery');
  return response.data;
});

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGalleries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGalleries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.galleries = action.payload;
      })
      .addCase(fetchGalleries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default gallerySlice.reducer;
