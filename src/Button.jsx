import React from 'react';

export default class Button extends React.Component {
  onClick = (e) => {
    alert(e.target);
  }

  render() {
    const button = (
      <div class="container-fluid mb-4 mt-4">
        <h1>Tinkoff data (Apple Inc)</h1>
        <button onClick={this.onClick} type="button" class="btn btn-primary">Get data</button>
      </div>
    );
    return button;
  }
}
