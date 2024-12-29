import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    adminAuth: authReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});
