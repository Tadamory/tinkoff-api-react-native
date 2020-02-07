const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api-invest.tinkoff.ru/openapi/sandbox/market/stocks",
    false
  );
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Bearer t.o7uOC8iGXrzsV_JXJM30L_57-gkx84O2gyAcuO8RfxFepHkzMJsNxtQO7QsMiC9gp-FJlNOQpm6GGBCTL9f8dw"
  );

  try {
    xhr.send();
  } catch (err) {
    alert(err);
  }

  const {
    payload: { instruments }
  } = JSON.parse(xhr.response);
  return instruments;
};

export default getData;
