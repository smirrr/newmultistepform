// src/store/userSlice.js
"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  username: "",
  password: "",
  confirmPassword: "",
  emailNotifications: false,
  pushNotifications: false,
  agreeToTerms: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zipcode = action.payload.zipcode;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
      state.emailNotifications = action.payload.emailNotifications;
      state.pushNotifications = action.payload.pushNotifications;
      state.agreeToTerms = action.payload.agreeToTerms;
    },
    clearUser(state) {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.address = "";
      state.city = "";
      state.state = "";
      state.zipcode = "";
      state.username = "";
      state.password = "";
      state.confirmPassword = "";
      state.emailNotifications = false;
      state.pushNotifications = false;
      state.agreeToTerms = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
