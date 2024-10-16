"use client";
import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    searchName: "",
  },
  reducers: {
    setSearchName: (state, action) => {
      state.searchName = action.payload;
    },
  },
});

export const { setSearchName } = characterSlice.actions;
export default characterSlice.reducer;