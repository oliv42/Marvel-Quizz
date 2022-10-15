import React, { Component } from 'react';
import Header from '../Header/Header';
    import '../../App.css';
import Landing from '../Landing/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
