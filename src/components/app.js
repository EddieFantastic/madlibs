import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class App extends Component {
  render() {
    return (
      <div className="App">
        { Header('Bottega Mad Libs') }
        <Card />
      </div>
    );
  }
}

export default App;