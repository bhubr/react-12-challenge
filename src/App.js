import React, { Component } from 'react';
import TabSelector from './TabSelector';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TabSelector />
      </div>
    );
  }
}

export default App;
