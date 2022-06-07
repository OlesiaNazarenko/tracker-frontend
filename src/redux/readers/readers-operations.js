import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllReaders, getReadersByID } from "../../services/tracker-api";

export const fetchAllReaders = createAsyncThunk(
  "readers/getAllReaders",
  async (thunkAPI) => {
    try {
      const readers = await getAllReaders();
      return readers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchReadersByID = createAsyncThunk(
  "readers/getReadersByID",
  async (id, thunkAPI) => {
    try {
      const reader = await getReadersByID(id);
      return reader;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
