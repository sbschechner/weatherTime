import React, { Component } from 'react';
import './Overall.css';
import App from './App';

class Overall extends Component {
  constructor(props){
    super(props);
    this.state = {
        showSplash: true,
        };
this.hideAway = this.hideAway.bind(this);
this.showSomething = this.showSomething.bind(this);
}


hideAway(){
  this.setState(prevState => ({
    showSplash: !prevState.showSplash
    }));
  }

showSomething(){
  if(this.state.showSplash === false){
    return(
     <div>
        	<App />
	     </div>

      )
  }
  if(this.state.showSplash === true){
      return (
      		<div>
      		  <div className ="headerSplash">
    			<h2 className="headerSplashTitle"> GetReady </h2>
    			</div>
    		<div className ="imgCont">
    			<img alt="coffeeCups" src={require("./coffeeMug.png")} /> 
    		</div>
    		<div className="buttonCont">
      			<a href="/#top"> <button onClick={this.hideAway}> Clock </button> </a>
      			<a href="/#time"> <button onClick={this.hideAway}> Weather </button> </a>
      			 <a href="/#news"> <button onClick={this.hideAway}> News </button> </a>
      		</div>
      		</div>
        )
    }
}


render(){
	return(
    <div className ="overallCont">
      {this.showSomething()}
    </div>

		)

	}
}
export default Overall