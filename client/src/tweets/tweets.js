import React, { Component } from 'react';
import "./tweets.css"
import { TablePagination } from 'react-pagination-table';
// import Splash from './home/Splash';

class Tweets extends Component {

  constructor(props){
    super(props)
    this.state={
      tweets: [],
      visible: false,
      ascdes: true
    }
  }

    ascending=() =>{
      this.setState({ 
        tweets: this.state.tweets.sort(),
        ascdes: true
      })
    }

    descending=() =>{
      this.setState({ tweets: this.state.tweets.sort()})
      this.setState({ 
        tweets: this.state.tweets.reverse(),
        ascdes: false
      })
    }

    getTweets=(e)=>{
      console.log("The tweets are here")
      fetch("http://localhost:4000/",{
        method:'POST'
      }).then(
        (response)=>response.json()
      ).then((data)=>{
        this.setState({
          tweets: data,
          visible: true
        })
      }) 
      e.preventDefault();
    };



  render() {
    return (
        <div className="tweets">
          <div>
            <h1 className ="text-center">Tweets for #gooddog</h1><br/><br/>
          </div>
          {this.state.visible?
          <TablePagination
            title="Tweets"
            data = {this.state.tweets}
            columns="tweet"
            headers={[<div className="text-center">"#GoodDog tweets"</div>]}
            perPageItemCount={10}
            totalCount={100}
          />: null
          }
            <div>
              {!this.state.visible? <button className="text-center" onClick={this.getTweets} type="submit">Get Tweets</button>: null}
            </div>
            <div>
              Change display Mode:{this.state.visible ? this.state.ascdes ? <button onClick={this.descending} >Ascending</button>: <button onClick={this.ascending} >Decending</button> : null}
            </div>
        </div>

    )};
  }
export default Tweets;
