import { createSlice } from "@reduxjs/toolkit";
const getUserFromLocalStorage = () => {
  const admin = localStorage.getItem("admin");
  if (admin === null || admin === undefined) {
    return null;
  }
  try {
    return JSON.parse(admin);
  } catch (error) {
    console.error("Error parsing user from localStorage", error);
    return null;
  }
};

const initialState = {
  admin: getUserFromLocalStorage(),
  token: localStorage.getItem("adminToken") || null,
  isAuthenticated:
    !!localStorage.getItem("adminToken") && !!localStorage.getItem("admin"),
  isLoading: false,
  error: null,
  preferences: {
    languageChecked: false,
    offersAndPackages: false,
    notifications: false,
    renewalSubscription: false,
  },
  
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startAuth(state) {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    authFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    updateUserPreferences(state, action) {
      state.preferences = {
        ...state.preferences,
        ...action.payload,
      };
    },
  },
});

export const {
  startAuth,
  authSuccess,
  authFailure,
  logoutSuccess,
  updateUserPreferences,
} = authSlice.actions;
export default authSlice.reducer;
