import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import getDataFromTinkoff from "../tinkoff";
import dataSelector from "../selectors";

const mapStateToProps = state => {
  const props = {
    dataFromTinkoff: dataSelector(state)
  };
  return props;
};

const actionCreators = {
  updateData: actions.updateData
};

const App = props => {
  const { dataFromTinkoff } = props;

  const handleClick = e => {
    e.preventDefault();
    const { updateData } = props;
    updateData(getDataFromTinkoff());
  };

  const renferElements = content => {
    if (!content || content === []) {
      return <ul></ul>;
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
      <div class="container-fluid mb-4 ml-4">
        {renferElements(dataFromTinkoff)}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(App);
