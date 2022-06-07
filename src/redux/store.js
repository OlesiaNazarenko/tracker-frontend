import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import readersReducer from "./readers/readers-slice";
import captureReducer from "./captures/capture-slice";
import athletesReducer from "./athletes/athletes-slice";

const readersPersistConfig = {
  key: "readers",
  storage,
};

const capturesPersistConfig = {
  key: "captures",
  storage,
};
const athletesPersistConfig = {
  key: "athletes",
  storage,
};
export const store = configureStore({
  reducer: {
    readers: persistReducer(readersPersistConfig, readersReducer),
    captures: persistReducer(capturesPersistConfig, captureReducer),
    athletes: persistReducer(athletesPersistConfig, athletesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
