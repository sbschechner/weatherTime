import React, { Component } from 'react';
import './City5Day.css';

class City5Day extends Component {
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
          <h2 className="title"> The 5 day Forecast </h2>

          <p> the forecast is {this.props.forecast} </p>

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

export default City5Day