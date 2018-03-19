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
      asc: true
    }
  }

    ascending=() =>{
      this.setState({ 
        tweets: this.state.tweets.sort((a,b)=>{
          var textA = a.tweet.toUpperCase();
          var textB = b.tweet.toUpperCase();
          return ( textA < textB ) ? -1 : ( textA > textB ) ? 1 : 0;
        }),
        asc: false
      }, () => console.log("ascending", this.state.tweets))
    }

    descending=() =>{
      // this.setState({ tweets: this.state.tweets.sort()})
      this.setState({ 
        tweets: this.state.tweets.reverse(),
        asc: true
      }, () => console.log("descending", this.state.tweets))
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
            { this.state.visible ? <h1 className="text-center"> Tweets for #goodDog </h1> : null }
            <br/><br/>
          </div>
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
            <div>
              { !this.state.visible ? <button className="text-center" onClick={ this.getTweets } type="submit"> Get Tweets </button> : null }
            </div>
            <div className="text-center"><br/>
                <h4>Change display Mode:</h4> { this.state.visible ? this.state.asc ? <button onClick={ this.ascending}> Ascending </button> : <button onClick={ this.descending }> Descending </button> :<h4> <p> click <b> Get Tweets </b> to sort </p> </h4> }
            </div>
        </div>

    )};
  }
export default Tweets;
