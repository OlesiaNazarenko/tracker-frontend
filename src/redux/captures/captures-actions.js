import { createAction } from "@reduxjs/toolkit";
export const getAllCaptures = createAction("readers/GET_ALL_CAPTURES");
export const getCaptureByID = createAction("readers/GET_CAPTURE_BY_ID");
export const addNewCapture = createAction("readers/ADD_NEW_CAPTURE");
