import ReactDOM from 'react-dom';
import React from 'react';

import { createStore } from 'redux';
import reducers from './reducers/index';

import Form from './components/Form';
import updateData from './actions/index';

const store = createStore(
  reducers,
);

const containerElement = document.getElementById('form');

const render = (text) => {
  ReactDOM.render(
    <Form
      dispatch={store.dispatch}
      updateData={updateData}
      content={text}
    />,
    containerElement,
  );
};

store.subscribe(() => {
  const { dataFromTinkoff } = store.getState();
  render(dataFromTinkoff);
});

render();
