import React, { Component } from 'react';
import './AddCity.css';
import CitiesCurrent from './Cities';
import City5Day from './City5Day'

class AddCity extends Component {
  constructor(props){
    super(props);
    this.state = {
        showSection: true,
        tempZip: null,
        tempCity:null,
        citiesCurrent: ["hello",],
        cityForecast:[null,]

        };
this.hideAway = this.hideAway.bind(this);
this.changeTempNumber = this.changeTempNumber.bind(this);
this.handleClick = this.handleClick.bind(this);
this.changeCity = this.changeCity.bind(this);
this.passCity = this.passCity.bind(this);
  }

hideAway(){
	this.setState(prevState => ({
    showSection: !prevState.showSection
    }));
  }

 changeTempNumber(event){
    this.setState({tempZip : event.target.value})
    }

 changeCity(event){
    this.setState({tempCity : event.target.value})
    }

handleClick(event){
  event.preventDefault();
  console.log("handle Click");
  console.log("zip is " + this.state.tempZip);
  console.log("city is" + this.state.tempCity);
  //this.zipToLocation() this will be at API call to get the weather and the forecast
}


passCity(){
	if(this.state.citiesCurrent[0] !== null){
		return(
			<div>
				<CitiesCurrent currentWeather = {this.state.citiesCurrent}/>
				<City5Day forecast={this.state.cityForecast}/>
			</div>
			)
	}
	else{
		return(
			<div>
			<br/>
			<p> no city data </p>
			</div>
			)
	}

}

showSomething(){
	if(this.state.showSection === false){
		return(
			<br /> //am going to want to collaspe this section later
			)
	}
	if(this.state.showSection === true){
		return(
			<div className="theForms">
				<form>
        			<label>
         				Please enter your zip code:
            			<input type='number' defaultValue = {this.state.tempZip}  onChange = {this.changeTempNumber}/>
            		</label>
            		<input type="submit" value="Submit Zip" onClick = {this.handleClick}/>
        		</form>
        		<h2> OR </h2>
        		<form>
        			<label>
         				Please enter your city:
            			<input type='text' defaultValue = {this.state.tempCity}  onChange = {this.changeCity}/>
            		</label>
            		<input type="submit" value="Submit City" onClick = {this.handleClick}/>
        		</form>
        		{this.passCity()}
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


  export default AddCity;