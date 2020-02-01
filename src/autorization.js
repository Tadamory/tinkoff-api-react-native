const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

export default () => {
  const apiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox';
  const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
  const secretToken = 't.o7uOC8iGXrzsV_JXJM30L_57-gkx84O2gyAcuO8RfxFepHkzMJsNxtQO7QsMiC9gp-FJlNOQpm6GGBCTL9f8dw';
  const api = new OpenAPI({ apiURL, secretToken, socketURL });
  return api;
};
