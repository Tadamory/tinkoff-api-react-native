import React from 'react';

export const Data = (props) => {
  const { content } = props;

  if (content === []) {
    return <ul></ul>;
  }

  const listItems = content.map((element) => {
    const { name, currency } = element;
    return <li>{`${name} (${currency})`}</li>;
  });

  return <ul>{listItems}</ul>;
};

export default Data;
