import React, { Component } from 'react';
import './Cities.css';

class CitiesCurrent extends Component {
  constructor(props){
    super(props);
    this.state = {
        showSection: true,

        };
this.hideAway = this.hideAway.bind(this);
this.showSomething = this.showSomething.bind(this);
}

hideAway(){
  this.setState(prevState => ({
    showSection: !prevState.showSection
    }));
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
          <h2 className="title"> The Current Weather in {this.props.location} </h2>

          <p> the current weather is {this.props.weather} </p>
          <p> the temp is {this.props.temperature} &#8457;</p>

        </div>

        )
    }
}


  render(){
    return(
      
    <div>
        <div className="sectionBar" onClick={this.hideAway}>
        <p>  writing</p>
      </div>
      {this.showSomething()}
    </div>
  )
  }
}

export default CitiesCurrent