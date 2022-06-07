import { createSlice } from "@reduxjs/toolkit";
import { fetchAthleteByID, fetchAllAthletes } from "./athletes-operations";
const initialState = {
  athletes: [],
  athleteByID: [],
  isLoading: false,
  error: false,
};
const athletesSlice = createSlice({
  name: "athletes",
  initialState,
  extraReducers: {
    [fetchAllAthletes.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchAllAthletes.fulfilled](state, action) {
      state.athletes = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchAllAthletes.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchAthleteByID.pending](state, action) {
      state.error = null;
      state.isLoading = true;
    },
    [fetchAthleteByID.fulfilled](state, action) {
      state.athleteByID = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchAthleteByID.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
export default athletesSlice.reducer;
