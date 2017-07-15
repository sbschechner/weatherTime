import React, { Component } from 'react';
import './AddCity.css';

class AddCity extends Component {
  constructor(props){
    super(props);
    this.state = {
        showSection: true,
        tempZip: null,

        };
this.hideAway = this.hideAway.bind(this);
this.changeTempNumber = this.changeTempNumber.bind(this);
this.handleClick = this.handleClick.bind(this);
  }

hideAway(){
	this.setState(prevState => ({
    showSection: !prevState.showSection
    }));
  }

 changeTempNumber(event){
    this.setState({tempZip : event.target.value})
    }

handleClick(event){
  event.preventDefault();
  console.log("handle Click");
  console.log(this.state.tempZip);
  //this.zipToLocation() this will be at API call to get the weather
}

showSomething(){
	if(this.state.showSection === false){
		return(
			<br /> //am going to want to collaspe this seciont later
			)
	}
	if(this.state.showSection === true){
		return(
			<div>
				<form>
        			<label>
         				Please enter your zip code:
            			<input type='number' defaultValue = {this.state.tempZip}  onChange = {this.changeTempNumber}/>
            		</label>
            		<input type="submit" value="Submit Zip" onClick = {this.handleClick}/>
        		</form>

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