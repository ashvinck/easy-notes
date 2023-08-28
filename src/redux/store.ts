import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

// Infering the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

