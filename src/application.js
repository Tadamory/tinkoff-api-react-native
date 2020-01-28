const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const autorization = () => {
  const apiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox';
  const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
  const secretToken = 't.o7uOC8iGXrzsV_JXJM30L_57-gkx84O2gyAcuO8RfxFepHkzMJsNxtQO7QsMiC9gp-FJlNOQpm6GGBCTL9f8dw';
  const api = new OpenAPI({ apiURL, secretToken, socketURL });
  return api;
};

const appendData = (data) => {
  const ul = document.createElement('ul');
  ul.classList.add('data');

  data.forEach((element) => {
    const { time, h } = element;
    const li = document.createElement('li');
    li.innerHTML = `${time} - ${h}$`;
    ul.append(li);
  });

  document.querySelector('.data').replaceWith(ul);
};

const click = () => {
  const api = autorization();

  !(async function run() {
    await api.sandboxClear();
    const { figi } = await api.searchOne({ ticker: 'AAPL' });

    const { candles } = await api.candlesGet({
      from: '2019-08-19T18:38:33.131642+03:00',
      to: '2019-08-30T18:48:33.131642+03:00',
      figi,
      interval: 'day',
    });
    appendData(candles);

  })();
};

export default () => {
  document.querySelector('.btn').addEventListener('click', click);
};
