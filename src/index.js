import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import getData from './tinkoff';

const Form = () => {
  const [data, setData] = useState(false);
  const click = () => setData(true);
  const context = (data) ? getData() : [];

  return (
    <div class="container-fluid mb-4 mt-4">
      <h1>Tinkoff data (Apple Inc)</h1>
      <button onClick={click} type="button" class="btn btn-primary">Get data</button>
      <h2>Dynamics of changes in the highest price</h2>
      <div class="container-fluid mb-4 ml-4">
        <Data context={context} />
      </div>
    </div>
  );
};

const Data = (props) => {
/*
  const data = props.context;
  const listItems = data.map((element) => 
    <li>{`${element.time}: ${element.h}$`}</li>
  );
  return <ul>{listItems}</ul>;
  */
  return <ul>{'sdfg'}</ul>
};

ReactDOM.render(<Form />, document.getElementById('form'));
