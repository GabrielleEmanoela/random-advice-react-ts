import { configureStore } from "@reduxjs/toolkit";
import adviceSlice from "./randomAdvice/adviceSlice";

export const store = configureStore({
  reducer: {
    advice: adviceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
