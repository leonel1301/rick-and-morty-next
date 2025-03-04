"use client";
const { configureStore } = require("@reduxjs/toolkit");
import characterReducer from '../slices/characterSlice'

const store = configureStore({
    reducer: {
        characters: characterReducer,
    },
});

export default store;