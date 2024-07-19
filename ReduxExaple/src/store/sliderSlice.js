

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSliders = createAsyncThunk(
"sliders/fetchSliders",
async () => {
const response = await axios.get("/db.json");
return response.data.sliders;
}
);

const sliderSlice = createSlice({
name: "sliders",
initialState: {
sliders: [],
status: "idle",
error: null,
},
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchSliders.pending, (state) => {
state.status = "loading";
})
.addCase(fetchSliders.fulfilled, (state, action) => {
state.status = "succeeded";
state.sliders = action.payload;
})
.addCase(fetchSliders.rejected, (state, action) => {
state.status = "failed";
state.error = action.error.message;
});
},
});

export default sliderSlice.reducer;