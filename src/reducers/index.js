import { combineReducers } from "redux";

const dataFromTinkoff = (state = [], action) => {
  switch (action.type) {
    case "DATA_UPDATE": {
      return action.payload.data;
    }
    default:
      return state;
  }
};

export default combineReducers({
  dataFromTinkoff
});
