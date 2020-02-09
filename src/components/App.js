import React from "react";
import { connect } from "react-redux";
import updateData from '../actions';
import getData from "../tinkoff";

const mapStateToProps = ({ dataFromTinkoff }) => {
  const props = { dataFromTinkoff };
  return props;
};

const App = props => {
  const { dataFromTinkoff } = props;

  const handleClick = e => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch(updateData(getData()));
  };

  const listElements = content => {
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
      <div class="container-fluid mb-4 ml-4">{listElements(dataFromTinkoff)}</div>
    </div>
  );
};

export default connect(mapStateToProps)(App);
