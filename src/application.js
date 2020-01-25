/*const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const autorization = () => {
  const apiURL = 'https://api-invest.tinkoff.ru/openapi';
  const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
  const secretToken = 't.o7uOC8iGXrzsV_JXJM30L_57-gkx84O2gyAcuO8RfxFepHkzMJsNxtQO7QsMiC9gp-FJlNOQpm6GGBCTL9f8dw';
  const api = new OpenAPI({ apiURL, secretToken, socketURL });
  return api;
};
const appendData = (data) => {
  const container = document.getElementById('data');
  const p = document.createElement('p');
  const text = document.createTextNode(data);
  p.append(text);
  container.append(p);
};
*/
const click = () => {
  //const api = autorization();
  //(async () => {
//    await api.sandboxClear();
//  })();
  //const { figi } = await api.searchOne({ ticker: 'AAPL' });
  //await api.setCurrenciesBalance({ currency: 'USD', balance: 1000 });
  //await api.instrumentPortfolio({ figi });
  //await api.limitOrder({ operation: 'Buy', figi, lots: 1, price: 100 });
  //await api.instrumentPortfolio({ figi });
  //appendData(xhr.responseText);
  //appendData('asda');
  alert('Hello!');
};

export default () => {
  document.querySelector('.btn').addEventListener('click', click);
};
