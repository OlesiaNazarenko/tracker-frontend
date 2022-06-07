import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllAthletes, getAthleteByID } from "../../services/tracker-api";

export const fetchAllAthletes = createAsyncThunk(
  "athletes/getAllCaptures",
  async (_, thunkAPI) => {
    try {
      const athletes = await getAllAthletes();
      return athletes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchAthleteByID = createAsyncThunk(
  "athletes/getCapturesByID",
  async (athletes, thunkAPI) => {
    try {
      const athlete = await getAthleteByID(athletes);
      return athlete;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
