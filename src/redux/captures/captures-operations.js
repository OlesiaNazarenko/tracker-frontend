import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCaptures,
  getCapturesByID,
  addNewCapture,
} from "../../services/tracker-api";

export const fetchAllCaptures = createAsyncThunk(
  "captures/getAllCaptures",
  async (data, thunkAPI) => {
    try {
      const captures = await getAllCaptures();
      return captures;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCapturesByID = createAsyncThunk(
  "readers/getCapturesByID",
  async (captures, thunkAPI) => {
    try {
      const capture = await getCapturesByID(captures);
      return capture;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const sendNewCapture = createAsyncThunk(
  "captures/addNewCapture",
  async (captures, thunkAPI) => {
    try {
      const capture = await addNewCapture(captures);
      return capture;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
