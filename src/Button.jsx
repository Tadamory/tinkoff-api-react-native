import ReactDOM from 'react-dom';
import React from 'react';
import Data from './Data.jsx';

const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const autorization = () => {
  const apiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox';
  const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
  const secretToken = 't.o7uOC8iGXrzsV_JXJM30L_57-gkx84O2gyAcuO8RfxFepHkzMJsNxtQO7QsMiC9gp-FJlNOQpm6GGBCTL9f8dw';
  const api = new OpenAPI({ apiURL, secretToken, socketURL });
  return api;
};

export default class Button extends React.Component {
  onClick = () => {
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

      ReactDOM.render(
        <Data data={candles}/>, 
        document.getElementById('data'),
      );

    })();
  }

  render() {
    const vdom = (
      <div class="container-fluid mb-4 mt-4">
        <h1>Tinkoff data (Apple Inc)</h1>
        <button onClick={this.onClick} type="button" class="btn btn-primary">Get data</button>
      </div>
    );
    return vdom;
  }
}
