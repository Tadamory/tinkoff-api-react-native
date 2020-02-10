import { combineReducers } from "redux";

const dataFromTinkoff = (state = [], action) => {
	switch (action.type) {
		case "DATA_UPDATE": {
			return action.payload.dataFromTinkoff;
		}
		default:
			return state;
	}
};

export default combineReducers({
	dataFromTinkoff
});
