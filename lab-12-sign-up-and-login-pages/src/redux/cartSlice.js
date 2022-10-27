import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

enableMapSet();

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: new Set(),
  },

  reducers: {
    addFilmId: (state, action) => {
      state.value.add(action.payload);
    },

    removeFilmId: (state, action) => {
      state.value.delete(action.payload);
    },
  },
});

export default cartSlice.reducer;
