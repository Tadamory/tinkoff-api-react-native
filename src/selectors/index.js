import { createSelector } from "reselect";

const getData = state => state.default.dataFromTinkoff;

const dataSelector = createSelector(getData, dataFromTinkoff => dataFromTinkoff);

export default dataSelector;
