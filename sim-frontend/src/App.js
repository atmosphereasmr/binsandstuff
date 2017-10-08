import React, { Component } from 'react';
import './App.css';

import Nav from './nav'
import Home from './Components/home.js'
import router from './Router'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {router}
      </div>
    );
  }
}

export default App;
