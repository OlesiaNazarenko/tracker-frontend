import { createAction } from "@reduxjs/toolkit";
export const getAllReaders = createAction("readers/GET_ALL_READERS");
export const getReadersByID = createAction("readers/GET_READERS_BY_ID");
