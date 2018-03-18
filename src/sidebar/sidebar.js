import React, { Component } from 'react';
// import Splash from './home/Splash';
import {
  Route,
  Link
} from 'react-router-dom';
import { routes } from './_routes';
import Tweets from "../tweets/tweets"
import "./sidebar.css"
// import {
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Button
// } from 'reactstrap';

class SideBar extends Component {

  render() {
    return (
        <div className="sidebar">
          <div className= "header_title">
            <h1 className ="text-center"><u>Welcome</u></h1>
            <h2>Twitter API by Adam Smith</h2>
            <h3>Requirements for the project</h3>
            <ul>
              <li> Query a list of the top 100 tweets with a hashtag of your choice.</li> <br/>
              <li> The end user wants to see the tweets with pagesize of 10. </li><br/>
              <li> The end user can page through the 100 results forward and backward. </li><br/>
              <li> The records should be sortable in alphabetically ascending and descending order.</li>
            </ul> 
            <Link to="/tweets"><button> Click Here </button></Link> to show tweets for #
          </div>
          <div className="sidebar-route">
            <Tweets />
          </div>
        </div>
        // className="sidebar-route">
        // {routes.map((route, index) => (
        // <Route
        // key={index}
        // path={route.path}
        // exact={route.exact}
        // component={route.main}/>
        // ))}

    );
  }
}

export default SideBar;


