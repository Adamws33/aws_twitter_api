import React, { Component } from 'react';
import Tweets from "../tweets/tweets"
import "./sidebar.css"

class SideBar extends Component {
// main container for the page
  render() {
    return (
//sidebar
        <div className="sidebar">
          <div className= "header_title">
            <h1 className ="text-center">Welcome</h1><br/><br/>
            <h2>Twitter API</h2> by Adam Smith
            <br/><br/><h3>Requirements for the project</h3>
            <ul>
              <li> Query a list of the top 100 tweets with a hashtag of your choice.</li>
              <li> The end user wants to see the tweets with pagesize of 10. </li>
              <li> The end user can page through the 100 results forward and backward. </li>
              <li> The records should be sortable in alphabetically ascending and descending order.</li>
            </ul> 
          </div>
{/* body of page comntainer for tweets */}
          <div className="sidebar-route">
            <Tweets />
          </div>
        </div>
    );
  }
}

export default SideBar;


