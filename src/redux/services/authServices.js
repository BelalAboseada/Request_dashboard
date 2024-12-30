// authService.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, signIn } from "../../Services/api.js";
import {
  authSuccess,
  authFailure,
  logoutSuccess,
  startAuth,
} from "../slices/authSlice.js";

// Sign Up Thunk
export const handleSignUp = createAsyncThunk(
  "auth/signUp",
  async (userData, { dispatch }) => {
    try {
      dispatch(startAuth());
      const response = await signUp(userData);
      console.log("response ======>>>  ", response);

      dispatch(authSuccess({ user: response.results, token: response.token }));
      return response;
    } catch (error) {
      dispatch(authFailure(error.message));
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async ({ email, password, lang }, { dispatch, rejectWithValue }) => {
    try {
      const response = await signIn({ email, password }, lang);
      // document.cookie = `adminToken=${response.token}; HttpOnly; Secure; SameSite=Strict`;
      const { userData, token } = response;
      // Save to local storage
      localStorage.setItem("admin", JSON.stringify(userData));
      localStorage.setItem("adminToken", token);
      dispatch(
        authSuccess({
          admin: response.userData,
          adminToken: response.token,
        })
      );
      return response;
    } catch (error) {
      dispatch(
        authFailure(error.response ? error.response.data : error.message)
      );
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Logout Thunk
export const handleLogout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    try {
      localStorage.removeItem("admin");
      localStorage.removeItem("adminToken");
      //  document.cookie =
      //    "adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; SameSite=Strict";
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(authFailure(error.message));
    }
  }
);
// export const handleUpdateUser = createAsyncThunk(
//   "auth/updateUser",
//   async (
//     { updatedData, profilePic },
//     { dispatch, getState, rejectWithValue }
//   ) => {
//     try {
//       dispatch(startAuth());

//       const state = getState();
//       const { admin, token } = state.auth;
//       const adminId = admin._id;

//       const updateResponse = await updateUser(adminId, updatedData, token);
//       console.log("Update Response =>", updateResponse);

//       let userUpdated = { ...admin, ...updatedData };

//       if (profilePic) {
//         const avatarResponse = await uploadAvatar(adminId, profilePic, token);
//         userUpdated = { ...userUpdated, profilePic: avatarResponse.profilePic };
//       }
//       dispatch(authSuccess({ admin: userUpdated, token }));
//       localStorage.setItem("admin", JSON.stringify(userUpdated));

//       return userUpdated;
//     } catch (error) {
//       console.error("Error updating user:", error);
//       return rejectWithValue(error.message);
//     }
//   }
// );
