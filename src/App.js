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
                    <div className ='navBarLinks'>
                      <h2> GetReady </h2>
                      <div className="linksCont">
                        <a className= "clockLink" href="/#top">     <p> Clock </p> </a>  
                         <a className= "weatherLink" href="/#time">  <p> Weather </p> </a>
                         <a className="newsLink" href="/#news">   <p> News </p> </a>  
                      </div> 
                     
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