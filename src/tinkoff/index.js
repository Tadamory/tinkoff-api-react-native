import axios from "axios";

const getDataFromTinkoff = async (dispatch, updateData) => {
  try {
    const instance = axios.create({
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer t.o7uOC8iGXrzsV_JXJM30L_57-gkx84O2gyAcuO8RfxFepHkzMJsNxtQO7QsMiC9gp-FJlNOQpm6GGBCTL9f8dw"
      }
    });
    const response = await instance.get(
      "https://api-invest.tinkoff.ru/openapi/sandbox/market/stocks"
    );
    const { payload } = JSON.parse(response.request.response);
    dispatch(updateData(payload.instruments));
  } catch (error) {
    console.log(error);
  }
};

export default getDataFromTinkoff;
