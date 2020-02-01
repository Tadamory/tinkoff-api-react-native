import React from 'react';

export default class Data extends React.Component {
  render() {

    const { data } = this.props;
    const listItems = data.map((element) => 
        <li>{`${element.time}: ${element.h}$`}</li>
    );
    return <ul>{listItems}</ul>;
  }
}
