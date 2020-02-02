import ReactDOM from 'react-dom';
import React from 'react';
import Data from '../components/Data';
import autorization from '../autorization';

const onClick = () => {
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
};

export default () => {
  return (
  <div class="container-fluid mb-4 mt-4">
    <h1>Tinkoff data (Apple Inc)</h1>
    <button onClick={onClick} type="button" class="btn btn-primary">Get data</button>
  </div>
  );
};
