import { createReducer } from "@reduxjs/toolkit";
import { updateData } from "../actions";

const initialState = {
	dataFromTinkoff: []
};

const reducers = createReducer(initialState, {
	[updateData]: (state, action) => {
		state.dataFromTinkoff = action.payload;
	}
});

export default reducers;
