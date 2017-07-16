import React, { Component } from 'react';
import './News.css';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
        showSection: true,
        article1Headline: null,
        article1Summary : null,
        article1Section : null,
        };
this.hideAway = this.hideAway.bind(this);
this.showSomething = this.showSomething.bind(this);
this.refreshNews = this.refreshNews.bind(this);
}

hideAway(){
  this.setState(prevState => ({
    showSection: !prevState.showSection
    }));
  }

  refreshNews(){
    console.log("refreshed the news");
    var URL ="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=83ce7c8ad10c40c3830c4c502c31cb90"  
    fetch(URL).then((response) => response.json())
    .then(data => {
        console.log("we are getting the NY");
        console.log(data);
        var article1Headline = data.results[0].title;
        var article1Summary = data.results[0].abstract;
        var article1Section =data.results[0].section;
        console.log(article1Headline);
        console.log(article1Summary);
        console.log(article1Section);
        this.setState({
          article1Headline: article1Headline,
           article1Summary: article1Summary,
            article1Section : article1Section
        }) 
    }
  )   
}

 componentDidMount(){
  var URL ="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=83ce7c8ad10c40c3830c4c502c31cb90"  
  fetch(URL).then((response) => response.json())
 .then(data => {
        console.log("we are getting the NY");
        console.log(data);
        //CREATE A FOR LOOP TO GRAB THE FIRST 5 and then should use map to get it out into table below
        var article1Headline = data.results[0].title;
        var article1Summary = data.results[0].abstract;
        var article1Section =data.results[0].section;
        var article1URL = data.results[0].short_url
        console.log(article1Headline);
        console.log(article1Summary);
        console.log(article1Section);
        this.setState({
          article1Headline: article1Headline,
           article1Summary: article1Summary,
            article1Section : article1Section,
            article1URL : article1URL,

        }) 
    }
  )   
}
 

showSomething(){
  if(this.state.showSection === false){
    return(
      <br /> //am going to want to collaspe this section later
      )
  }
  if(this.state.showSection === true){
      return (
        <div>
          <h2> The News</h2>
          <button onClick={this.refreshNews}> Refresh the News </button>
          <table>
            <tbody>
              <tr>
              <th> HeadLine </th>
              <th> Summary </th>
              <th> URL </th>
            </tr>
              <tr>
                <td>
                {this.state.article1Headline}
                </td>
                <td>
                {this.state.article1Summary}
                </td>
                <td> 
                <a target="_blank" href={this.state.article1URL}> {this.state.article1URL} </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        )
    }
}


  render(){
    return(
      
    <div>
        <div className="sectionBar" id="news" onClick={this.hideAway}>
        <p>  writing</p>
      </div>
      {this.showSomething()}
    </div>
  )
  }
}

export default News