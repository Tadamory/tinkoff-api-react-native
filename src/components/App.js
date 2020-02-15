import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "../features";
import getDataFromTinkoff from "../tinkoff";
import dataSelector from "../selectors";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  const handleClick = () => {
    getDataFromTinkoff(dispatch, updateData);
  };

  const renderElements = () => {
    if (!data || data === []) {
      return null;
    }
    
    const listItems = data.map((element, index) => {
      const { name, currency } = element;
      return <li key={index}>{`${name} (${currency})`}</li>;
    });
    return <ul>{listItems}</ul>;
  };

  return (
    <div className="container-fluid mb-4 mt-4">
      <h1>Tinkoff API</h1>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Get data
      </button>
      <h2>Stock list:</h2>
      <div className="container-fluid mb-4 ml-4">{renderElements()}</div>
    </div>
  );
};

export default App;
