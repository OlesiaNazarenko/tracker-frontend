import { createSlice } from "@reduxjs/toolkit";
import { fetchReadersByID, fetchAllReaders } from "./readers-operations";
const initialState = {
  readers: [],
  readersByID: [],
  isLoading: false,
  error: false,
};
const readersSlice = createSlice({
  name: "readers",
  initialState,
  extraReducers: {
    [fetchAllReaders.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchAllReaders.fulfilled](state, action) {
      state.readers = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchAllReaders.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchReadersByID.pending](state, action) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchReadersByID.fulfilled](state, action) {
      state.readersByID = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchReadersByID.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default readersSlice.reducer;
