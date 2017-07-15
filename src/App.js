import React from 'react';
import './App.css';
import DateTime from './DateTime';
import AddCity from './AddCity';


export default function App(props) {

    return (
        <div>
            <div className="app">
                <header className = "navBar">
                    <h2> this is the header </h2>

                    <div className ='navBarLinks'>
                    </div>
                </header>
                <main>
                    <p> WeatherTime App </p>
                <DateTime />
                <AddCity />

                </main>
                <p> down here</p>
            </div>
        <div className = "footer" >
          <h2> we are in the footer in the app </h2>
        </div>
        </div>

    );
}