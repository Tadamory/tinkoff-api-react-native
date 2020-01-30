import React from 'react';

export default class Data extends React.Component {
  render() {
    const data = (
      <div class="container-fluid mb-4">
        <H2>Dynamics of changes in the highest price</H2>
        <div id="data" class="container-fluid mb-4 ml-4">
          <ul class='data'></ul>
        </div>
      </div>
    );
    return data;
  }
}
