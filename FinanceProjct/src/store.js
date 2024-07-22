import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './features/serviceSlice';
import blogReducer from './features/blogSlice';
import galleryReducer from './features/gallerySlice';
import projectReducer from './features/projectSlice';

const store = configureStore({
  reducer: {
    service: serviceReducer,
    blog: blogReducer,
    gallery: galleryReducer,
    project: projectReducer,
  },
});

export default store;
