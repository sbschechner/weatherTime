import React from 'react';
import './App.css';
import DateTime from './DateTime';
import AddCity from './AddCity';
import News from './News';


export default function App(props) {


    return (
        <div>
            <div className="app">
                <header className = "navBar">
                    <div className ="imgContLeft">
                      <img alt="coffeeCups" src={require("./coffeeMug.png")} /> 
                    </div>
                    <div className ='navBarLinks'>
                    <h2> GetReady </h2>
                    <ul className="navBarLinksList">
                      <li> <a href="/#top"> Clock</a>    </li>
                      <li> <a href="/#time"> Weather</a>    </li>
                      <li> <a href="/#news">  News </a> </li>
                    </ul>
                    </div>
                    <div className ="imgContRight">
                          <img alt="coffeeCups" src={require("./coffeeMug.png")} /> 
                    </div>
                </header>
                <main id="top">
                <DateTime />
                <AddCity />
                <News />
                </main>
            </div>
        <div className = "footer" >
          <h4> Benjamin Schechner &#169; 2017 </h4>
          </div>
        </div>

    );
}

//Live on Netlify at http://596a8ab3424ef23067fb9d43.courier-kangaroo-15044.netlify.com