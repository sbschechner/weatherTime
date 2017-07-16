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
        hasCurrentData:false,
        citiesCurrentWeather: null,
        citiesCurrentTemp:null,
        cityForecastTemp: null,
        cityForecastWeather:null,

        };
this.hideAway = this.hideAway.bind(this);
this.changeTempNumber = this.changeTempNumber.bind(this);
this.handleClick = this.handleClick.bind(this);
this.changeCity = this.changeCity.bind(this);
this.passCity = this.passCity.bind(this);
this.getWeather = this.getWeather.bind(this);
this.reset = this.reset.bind(this);
this.resetButtonAppear = this.resetButtonAppear.bind(this);
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
 	var cityName = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    this.setState({tempCity : cityName})
    }

handleClick(event){
  event.preventDefault();
  console.log("handle Click");
  this.refs.zip.value=""
  this.refs.city.value=""
  console.log("zip is " + this.state.tempZip);
  console.log("city is" + this.state.tempCity);
  event.zip = ""
  this.getWeather()
}

getWeather(){
if(this.state.tempZip === null){ //this is a city Name search
var URLzip = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.tempCity+',US&appid=ffd7b2bb6c7b336fcf0f974f329ce636&units=imperial'
fetch(URLzip).then((response) => response.json())
 .then(data => {
        console.log("we are getting the weather via City");
        console.log(data); 
        var temperature = data.main.temp
        var weatherDescription = data.weather[0].description
        console.log(temperature);
        console.log(weatherDescription);
        this.setState({
        	citiesCurrentTemp: temperature,
        	citiesCurrentWeather: weatherDescription,
            hasCurrentData : true
        }) 
    }
  )   
}


if(this.state.tempCity === null){ //this is a zipCode search
var URLcity = 'http://api.openweathermap.org/data/2.5/weather?zip='+this.state.tempZip+',US&appid=ffd7b2bb6c7b336fcf0f974f329ce636&units=imperial'
fetch(URLcity).then((response) => response.json())
 .then(data => {
        console.log("we are getting the weather via zipCode");
        console.log(data); 
        var temperature = data.main.temp
        var weatherDescription = data.weather[0].description
        console.log(temperature);
        console.log(weatherDescription);
        this.setState({
        	citiesCurrentTemp: temperature,
        	citiesCurrentWeather: weatherDescription,
        	tempCity: data.name,
            hasCurrentData : true
        }) 
    }
  )   
}


if(this.state.tempZip === null){ //this is a city Name search
var URL = 'http://api.openweathermap.org/data/2.5/forecast?q='+this.state.tempCity+',US&appid=ffd7b2bb6c7b336fcf0f974f329ce636&units=imperial'
fetch(URL).then((response) => response.json())
 .then(data => {
        console.log("we are getting the forecast weather via City");
        console.log(data); 
        var temperature = data.list[3].main.temp; //this grabs weather for tomorrow at 9AM 
        var weatherDescription = data.list[3].weather[0].description;
        console.log(temperature);
        console.log(weatherDescription);
        this.setState({
        	cityForecastTemp: temperature,
        	cityForecastWeather: weatherDescription,
            hasCurrentData : true
        }) 
    }
  )   
}

if(this.state.tempCity === null){ //this is a city Name search
var URLFore = 'http://api.openweathermap.org/data/2.5/forecast?zip='+this.state.tempZip+',US&appid=ffd7b2bb6c7b336fcf0f974f329ce636&units=imperial'
fetch(URLFore).then((response) => response.json())
 .then(data => {
        console.log("we are getting the forecast weather via City");
        console.log(data); 
        var temperature = data.list[3].main.temp; //this grabs weather for tomorrow at 9AM 
        var weatherDescription = data.list[3].weather[0].description;
        console.log(temperature);
        console.log(weatherDescription);
        this.setState({
        	cityForecastTemp: temperature,
        	cityForecastWeather: weatherDescription,
            hasCurrentData : true
        }) 
    }
  )   
}

}

passCity(){
	if(this.state.hasCurrentData === true){
		return(
			<div>
				<CitiesCurrent location={this.state.tempCity} temperature={this.state.citiesCurrentTemp} weather = {this.state.citiesCurrentWeather}/>
				<City5Day forecastTemp={this.state.cityForecastTemp} forecastWeather={this.state.cityForecastWeather}/>
			</div>
			)
	}
	else{
		return(
			<div>
			<br/>
			</div>
			)
	}

}

resetButtonAppear(){
	this.setState({
		hasCurrentData : false,
		tempCity : null,
		tempZip: null,
	})

}

reset(){
		if(this.state.showSection === true && this.state.hasCurrentData === true){
		return(

			<button className = "resetButton" onClick={this.resetButtonAppear}> Look Up Another City or Zip Code </button>

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
				<h2 id="header"> The Weather </h2>
				<form>
        			<label>
         				Please enter your zip code:
            			<input ref="zip" type='number' defaultValue = {this.state.tempZip} onChange = {this.changeTempNumber}/>
            		</label>
            		<input  type="submit" value="Submit Zip" onClick = {this.handleClick}/>
        		</form>
        		<h2> OR </h2>
        		<form>
        			<label>
         				Please enter your city:
            			<input ref="city" type='text' defaultValue = {this.state.tempCity}  onChange = {this.changeCity}/>
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
  	  	<div className="sectionBar" id="weather" onClick={this.hideAway}>
    		<p>  writing</p>
    	</div>
    	{this.reset()}
    	<br/>
    	{this.showSomething()}
    	
  	</div>
  )
  }
}


  export default AddCity;