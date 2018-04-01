import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Header from './header/Header'
import SearchBar from './searchSection/SearchBar'

// var api_key = "04e815387301602505c1d844776145df"


class App extends Component {
  // componentDidMount(){
  //   axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${api_key}`)
  // }
  
  render() {

    
      
    
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
