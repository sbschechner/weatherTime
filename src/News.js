import React, { Component } from 'react';
import './News.css';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
        showSection: true,
        articleArrHeadline : [],
        articleArrSummary : [],
        articleArrURL :[],
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
        console.log("we are getting the NY News");
        for (var i=0; i<5; i++){
        var article1Headline = data.results[i].title;
        var article1Summary = data.results[i].abstract;
        var article1URL = data.results[i].short_url
        var articleArrHeadlineUpdate = [...this.state.articleArrHeadline, article1Headline]
        var articleArrSummaryUpdate = [...this.state.articleArrSummary, article1Summary,]
        var articleArrURLUpdate = [...this.state.articleArrURL, article1URL]
        this.setState({
          articleArrHeadline : articleArrHeadlineUpdate,
          articleArrSummary : articleArrSummaryUpdate,
          articleArrURL : articleArrURLUpdate,
          })
        }
    }
  )   
}

 componentDidMount(){
  var URL ="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=83ce7c8ad10c40c3830c4c502c31cb90"  
  fetch(URL).then((response) => response.json())
 .then(data => {
        console.log("we are getting the NY News");
        for (var i=0; i<5; i++){
        var article1Headline = data.results[i].title;
        var article1Summary = data.results[i].abstract;
        var article1URL = data.results[i].short_url
        var articleArrHeadlineUpdate = [...this.state.articleArrHeadline, article1Headline]
        var articleArrSummaryUpdate = [...this.state.articleArrSummary, article1Summary,]
        var articleArrURLUpdate = [...this.state.articleArrURL, article1URL]
        this.setState({
          articleArrHeadline : articleArrHeadlineUpdate,
          articleArrSummary : articleArrSummaryUpdate,
          articleArrURL : articleArrURLUpdate,
          })
        }
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
        <div >
          <h2> The News</h2>
          <table >
            <tbody>
              <tr>
              <th> Headline </th>
              <th> Summary </th>
              <th> URL </th>
            </tr>

              <tr>
                <td>
                  {this.state.articleArrHeadline[0]}
                </td>
                <td>
                  {this.state.articleArrSummary[0]}
               </td>
                <td>
                  <a target="_blank" href={this.state.articleArrURL[0]}> {this.state.articleArrURL[0]} </a>
                </td>
              </tr>

              <tr>
                <td>
                  {this.state.articleArrHeadline[1]}
                </td>
                <td>
                  {this.state.articleArrSummary[1]}
               </td>
                <td>
                  <a target="_blank" href={this.state.articleArrURL[1]}> {this.state.articleArrURL[1]} </a>
                </td>
              </tr>
            
                <tr>
                <td>
                  {this.state.articleArrHeadline[2]}
                </td>
                <td>
                  {this.state.articleArrSummary[2]}
               </td>
                <td>
                  <a target="_blank" href={this.state.articleArrURL[2]}> {this.state.articleArrURL[2]} </a>
                </td>
              </tr>

                  <tr>
                <td>
                  {this.state.articleArrHeadline[3]}
                </td>
                <td>
                  {this.state.articleArrSummary[3]}
               </td>
                <td>
                  <a target="_blank" href={this.state.articleArrURL[3]}> {this.state.articleArrURL[3]} </a>
                </td>
              </tr>

                  <tr>
                <td>
                  {this.state.articleArrHeadline[4]}
                </td>
                <td>
                  {this.state.articleArrSummary[4]}
               </td>
                <td>
                  <a target="_blank" href={this.state.articleArrURL[4]}> {this.state.articleArrURL[4]} </a>
                </td>
              </tr>
              
            </tbody>
          </table>
            <button onClick={this.refreshNews}> Refresh the News </button>
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