import React, { Component } from 'react';
import './DateTime.css';

class DateTime extends Component {
  constructor(props){
    super(props);
    this.state = {
        currentDay: null,
        currentHour: null,
        currentMinute:null,
        showSection:true,
        };

this.getDate = this.getDate.bind(this);
this.hideAway = this.hideAway.bind(this);
this.showSomething = this.showSomething.bind(this);
  }

getDate(){
var dateTime = new Date();
return dateTime
}



componentDidMount(){ 
  var theDate = this.getDate();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var minutes = theDate.getMinutes()
  if(minutes<10){
    minutes = "0"+ minutes

  }
  this.setState({
  	currentDay : days[theDate.getDay()],
  	currentHour: theDate.getHours(),
  	currentMinute: minutes
  })
}

hideAway(){
	this.setState(prevState => ({
    showSection: !prevState.showSection
    }));
  }

   showSomething(){
	if(this.state.showSection === false){
		return(
			<br/> //am going to want to collaspe this section later
			)
	}

	if(this.state.showSection === true){
		return(

			<div>
            <h2> The Time </h2>
      			<div className ="dateTimeCont" id="time">
      				<h2> The Time is <span> {this.state.currentHour} : {this.state.currentMinute} </span> on {this.state.currentDay} </h2>
     			</div>
     		</div>
			)
		}
	}

  render() { 
    return(

       	<div>
  	  	<div className="sectionBar" onClick={this.hideAway}>
    		<p>  writing</p>
    	</div>
    	{this.showSomething()}
  	</div>

      );
  }
}

export default DateTime;