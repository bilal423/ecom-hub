import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};




export const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, data) => {
        const { payload } = data || {};
        state.value = payload || {};
    },
  },
});

export const { setUser } = userStore.actions;

export default userStore.reducer;
