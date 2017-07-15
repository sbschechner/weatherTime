import React from 'react';
import './App.css';
import DateTime from './DateTime';
import AddCity from './AddCity';


export default function App(props) {

    return (
        <div>
            <div className="app">
                <header className = "navBar">
                    <h2 className="navBarHeader"> this is the header and Links will go here</h2>

                    <div className ='navBarLinks'>
                    </div>
                </header>
                <main>
                    <p> WeatherTime App </p>
                <DateTime />
                <AddCity />
                </main>
            </div>
        <div className = "footer" >
          <h2> we are in the footer in the app </h2>
        </div>
        </div>

    );
}