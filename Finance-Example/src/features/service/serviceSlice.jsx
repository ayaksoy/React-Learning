// src/features/service/serviceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    {
      "id": 1,
      "name": "Service A",
      "description": "Description of Service A.",
      "image": "http://example.com/service1.jpg"
    },
    {
      "id": 2,
      "name": "Service B",
      "description": "Description of Service B.",
      "image": "http://example.com/service2.jpg"
    },
    {
      "id": 3,
      "name": "Service C",
      "description": "Description of Service C.",
      "image": "http://example.com/service3.jpg"
    },
    {
      "id": 4,
      "name": "Service D",
      "description": "Description of Service D.",
      "image": "http://example.com/service4.jpg"
    },
    {
      "id": 5,
      "name": "Service E",
      "description": "Description of Service E.",
      "image": "http://example.com/service5.jpg"
    },
    {
      "id": 6,
      "name": "Service F",
      "description": "Description of Service F.",
      "image": "http://example.com/service6.jpg"
    },
    {
      "id": 7,
      "name": "Service G",
      "description": "Description of Service G.",
      "image": "http://example.com/service7.jpg"
    }
  ],
  status: 'idle',
  error: null,
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    // Example reducer for adding a new service
    addService: (state, action) => {
      state.services.push(action.payload);
    },
    // Example reducer for removing a service by id
    removeService: (state, action) => {
      state.services = state.services.filter(service => service.id !== action.payload);
    },
  },
});

export const { addService, removeService } = serviceSlice.actions;

export default serviceSlice.reducer;
