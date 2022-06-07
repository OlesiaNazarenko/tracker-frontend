import { createAction } from "@reduxjs/toolkit";
export const getAllAthletes = createAction("readers/GET_ALL_ATHLETES");
export const getAthleteByID = createAction("readers/GET_ATHLETE_BY_ID");
