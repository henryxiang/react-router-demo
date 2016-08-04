import React, { Component } from 'react';
import _ from 'lodash';

class App extends Component {
  render() {
    return (
      <div>React Demo {_.VERSION}</div>
    );
  }
}

export default App;
