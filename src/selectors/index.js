import { createSelector } from "reselect";

const getData = state => state.dataFromTinkoff;

const dataSelector = createSelector(getData, dataFromTinkoff =>
  Object.values(dataFromTinkoff)
);

export default dataSelector;
