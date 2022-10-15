import React, { Component } from 'react';
import Header from '../Header/Header';
    import '../../App.css';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
