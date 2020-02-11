export const updateData = (dataFromTinkoff = []) => ({
  type: "DATA_UPDATE",
  payload: {
    dataFromTinkoff
  }
});
