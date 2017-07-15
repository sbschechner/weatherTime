import React, { Component } from 'react';
import './DateTime.css';

class DateTime extends Component {
  constructor(props){
    super(props);
    this.state = {
        currentDay: null,
        currentHour: null,
        currentMinute:null
        };

this.getDate = this.getDate.bind(this);
  }

getDate(){
var dateTime = new Date();
return dateTime
}



componentDidMount(){ 
  var theDate = this.getDate();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  this.setState({
  	currentDay : days[theDate.getDay()],
  	currentHour: theDate.getHours(),
  	currentMinute: theDate.getMinutes()
  })
}

  render() { 
    return(
    <div>
    	<div className="sectionBar" >
    		<p>  writing</p>
    	</div>
      	<div className ="dateTimeCont">
      		<h2> The Time is <span> {this.state.currentHour} : {this.state.currentMinute} </span> on {this.state.currentDay} </h2>
     	</div>
     </div>
      );
  }
}

export default DateTime;