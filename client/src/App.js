import React, { Component } from 'react';
import SideBar from './sidebar/sidebar';
// import Splash from './home/Splash';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <SideBar/>       
          {/* <SiteBar clickLogout={this.logout} loggedIn={this.state.sessionToken} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
