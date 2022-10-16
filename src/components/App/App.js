import React, { Component } from 'react';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome/Welcome';
import Login from '../Login/Login';
import '../../App.css';
import Signup from '../Signup/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Welcome />
        <Landing />
        <Login />
        <Signup />

        <Footer />
      </div>
    );
  }
}

export default App;
