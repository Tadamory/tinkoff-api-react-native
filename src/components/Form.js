import React, { useState } from 'react';
import getData from '../tinkoff';
import Data from './Data';

export const Form = () => {
  const [data, setData] = useState([]);
  const click = () => setData(getData());

  return (
    <div class="container-fluid mb-4 mt-4">
      <h1>Tinkoff API</h1>
      <button onClick={click} type="button" class="btn btn-primary">Get data</button>
      <h2>Stock list:</h2>
      <div class="container-fluid mb-4 ml-4">
        <Data content={data} />
      </div>
    </div>
  );
};

export default Form;
