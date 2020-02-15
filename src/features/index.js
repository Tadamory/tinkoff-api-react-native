import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataFromTinkoff: []
};

const slice = createSlice({
  name: 'tinkoff',
  initialState: initialState,
  reducers: {
    updateData(state, action) {
      state.dataFromTinkoff = action.payload;
    }
  }
})

export const { updateData } = slice.actions

export default slice.reducer;
