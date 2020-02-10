import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

import { updateData } from "../actions";
import getDataFromTinkoff from "../tinkoff";
import dataSelector from "../selectors";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  const handleClick = () => {
    dispatch(updateData(getDataFromTinkoff()));
  };

  const renderElements = content => {
    if (!content || content === []) {
      return null;
    }
    const listItems = content.map(element => {
      const { name, currency } = element;
      return <li>{`${name} (${currency})`}</li>;
    });
    return <ul>{listItems}</ul>;
  };

  return (
    <div class="container-fluid mb-4 mt-4">
      <h1>Tinkoff API</h1>
      <button type="button" class="btn btn-primary" onClick={handleClick}>
        Get data
      </button>
      <h2>Stock list:</h2>
      <div class="container-fluid mb-4 ml-4">{renderElements(data)}</div>
    </div>
  );
};

export default App;
