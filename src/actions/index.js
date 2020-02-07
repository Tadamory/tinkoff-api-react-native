const updateData = (data = []) => ({
  type: 'DATA_UPDATE',
  payload: {
    data,
  },
});

export default updateData;
