import React, { Component } from 'react';
import SideBar from './sidebar/sidebar';
// import Splash from './home/Splash';
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

//main file for all of the other components to render through 
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <SideBar/>       
        </div>
      </Router>
    );
  }
}

export default App;
