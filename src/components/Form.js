import React from "react";
import getData from "../tinkoff/index";
import Data from "./Data";

const Form = props => {
  const { content } = props;

  const handleClick = e => {
    e.preventDefault();
    const { dispatch, updateData } = props;
    dispatch(updateData(getData()));
  };

  return (
    <div class="container-fluid mb-4 mt-4">
      <h1>Tinkoff API</h1>
      <button onClick={handleClick} type="button" class="btn btn-primary">
        Get data
      </button>
      <h2>Stock list:</h2>
      <div class="container-fluid mb-4 ml-4">
        <Data content={content} />
      </div>
    </div>
  );
};

export default Form;
