import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCaptures,
  fetchCapturesByID,
  sendNewCapture,
} from "./captures-operations";
const initialState = {
  allCaptures: [],
  capturesByID: [],
  newCapture: [],
  isLoading: false,
  error: false,
};
const captureSlice = createSlice({
  name: "captures",
  initialState,
  extraReducers: {
    [fetchAllCaptures.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchAllCaptures.fulfilled](state, action) {
      state.allCaptures = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchAllCaptures.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchCapturesByID.pending](state, action) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchCapturesByID.fulfilled](state, action) {
      state.capturesByID = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchCapturesByID.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
      state.isLoading = false;
    },
    [sendNewCapture.pending](state, action) {
      state.error = null;
      state.isLoading = true;
    },
    [sendNewCapture.fulfilled](state, action) {
      state.newCapture = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [sendNewCapture.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default captureSlice.reducer;
