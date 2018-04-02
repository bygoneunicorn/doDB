import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Header from './header/Header'
import SearchBar from './searchSection/SearchBar'
import Footer from './footer/Footer'

// var api_key = "04e815387301602505c1d844776145df"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="background-texture">
        <SearchBar />
        </div>
        <Footer  />
      </div>
    );
  }
}

export default App;
