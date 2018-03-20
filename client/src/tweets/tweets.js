import React, { Component } from 'react';
import "./tweets.css"
import { TablePagination } from 'react-pagination-table';

class Tweets extends Component {

  constructor(props){
    super(props)
    this.state={
      tweets: [],
      visible: false,
      asc: true
    }
  }
//will order tweets ascending and change the asc state to false displaying descending 
    ascending=() =>{
      this.setState({ 
        tweets: this.state.tweets.sort((a,b)=>{
          var textA = a.tweet.toUpperCase();
          var textB = b.tweet.toUpperCase();
          return ( textA < textB ) ? -1 : ( textA > textB ) ? 1 : 0;
        }),
        asc: false
      })
    }
//will order tweets descending and change the asc state to true displaying ascending 
    descending=() =>{
      this.setState({ 
        tweets: this.state.tweets.reverse(),
        asc: true
      })
    }

//call to server to make api request to get tweets
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
            { this.state.visible ? <h1 className="text-center"> Tweets for #goodDog </h1> : null }
            <br/><br/>
          </div>
{/* information from the GET displaying on the screen */}
          { this.state.visible?
          <TablePagination className="text-center"
            title=""
            data = { this.state.tweets }
            columns="tweet"
            headers={ ["#goodDog tweets"] }
            arrayOption= { [] }
            perPageItemCount={ 10 }
            totalCount={ 100 }
          />: null
          }
{/* displays a button to get tweets or a header depending on the value of state.visible */}
            <div className="tweetButton">
              { !this.state.visible ? <button className="getTweets" onClick={ this.getTweets } type="submit"> Get Tweets </button> : null }
            </div>
{/* displays ascending or descending based on the value of stare.asc */}
            <div className="text-center"><br/>
                <h4>Change display mode:</h4> { this.state.visible ? this.state.asc ? <button className="ascButton" onClick={ this.ascending}> Ascending </button> : <button className="ascButton" onClick={ this.descending }> Descending </button> :<h4> <p> click <b> Get Tweets </b> to sort </p> </h4> }
            </div>
        </div>

    )};
  }
export default Tweets;
