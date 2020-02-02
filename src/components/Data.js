import React from 'react';

export default ({ data }) => {
  const listItems = data.map((element) => 
      <li>{`${element.time}: ${element.h}$`}</li>
  );
  return <ul>{listItems}</ul>;
};
