import React, { Component } from 'react';
import './comps.css';
import BerritonPage from './BerritonPage.js';
import ForGloryPage from './forGloryPage.js';
import AstroAdventuresPage from './astroAdventuresPage.js';

class WebDev extends Component {
    constructor(props){
        super(props)
        this.state ={
            webdevpage: true,
            graphicdesignpage: false,
            seeBerriton: false,
            seeForGlory: false,
            seeAstroAdventures: false,
        }
        
    }
    
    workbut1 = () =>{
        this.setState({
             webdevpage: true,
            graphicdesignpage: false,
            seeBerriton: false,
            seeForGlory: false,
            seeAstroAdventures: false,
        });
        console.log("workbut1 clicked");
    }
    
    workbut2 = () =>{
        this.setState({
             webdevpage: false,
            graphicdesignpage: true,
            seeBerriton: false,
            seeForGlory: false,
            seeAstroAdventures: false,
        });
        console.log("workbut2 clicked");
    }
    
    goBerriton = () =>{
        this.setState({
             webdevpage: false,
            graphicdesignpage: false,
            seeBerriton: true,
            seeForGlory: false,
            seeAstroAdventures: false,
        });
        console.log("berriton clicked");
    }
    
    goForGlory = () =>{
        this.setState({
             webdevpage: false,
            graphicdesignpage: false,
            seeBerriton: false,
            seeForGlory: true,
            seeAstroAdventures: false,
        });
        console.log("for Glory clicked");
    }
    
    goAstroAdventures = () =>{
        this.setState({
             webdevpage: false,
            graphicdesignpage: false,
            seeBerriton: false,
            seeForGlory: false,
            seeAstroAdventures: true,
        });
        console.log("astro clicked");
    }
    
  render() {
      
      var workpage = null;
      
      if(this.state.webdevpage == true){
          
          
          workpage = <div className="webDevelopment">
              
              //BERRITON
          <div className="projectDiv">
              <div className="displayImg" id="berritonFin"></div>
                <div className="aboutProj">
              <h1>Berriton</h1>
                <h3>An interactive web story</h3>
          <p>_____________________________________________</p>
                <p>Berriton is a fun, family friendly, online story that takes place in the forest of Berriton.This was my 2nd semester project at BCIT, we were tasked with finding a team, and building a JavaScript application. Get to know the animals of the forest, solve puzzles, and have fun.</p>
                <button className="projBut" onClick={this.goBerriton}>See This Project!</button>
          </div>
        </div>
                
                //FOR GLORY
          <div className="projectDiv">
              <div className="displayImg" id="forGloryFin"></div>
                <div className="aboutProj">
              <h1>For Glory</h1>
                <h3>Multiplayer Online Card Game</h3>
          <p>_____________________________________________</p>
                <p>For Glory is a turn based card game which was a project at BCIT. Me and my team built this app using WebSockets, JavaScript, HTML5, and CSS. In this game you command a team, either the light team, or the dark team. You and your team face off against your opposition using cards to boost your teams stats.</p>
                <button className="projBut" onClick={this.goForGlory}>See This Project!</button>
          </div>
        </div>
                
                //ASTRO ADVENTURES
          <div className="projectDiv">
              <div className="displayImg" id="astroAdventuresFin"></div>
                <div className="aboutProj">
              <h1>Astro-Adventures</h1>
                <h3>Fantasy Outer Space Travel Site</h3>
          <p>_____________________________________________</p>
                <p>Astro-Adventures was the first website I built at BCIT. It is purely HTML, and CSS. It was the first term project. We were tasked with building a simple, resposive, webpage on any topic.</p>
                <button className="projBut" onClick={this.goAstroAdventures}>See This Project!</button>
          </div>
        </div>
                
                
          </div>;
      } else if(this.state.graphicdesignpage == true){
          
          workpage = <div className="graphicDesign"></div>;
          
      } else if(this.state.seeBerriton == true){
          
          workpage = <BerritonPage />;
          
      } else if(this.state.seeForGlory == true){
          
          workpage = <ForGloryPage />;
          
      } else if(this.state.seeAstroAdventures == true){
          
          workpage = <AstroAdventuresPage />;
          
      }
      
    return (
      <div className="webDevDiv">
        {workpage}
        <div className="workButs">
        <button className="workBut" onClick={this.workbut1}>All Projects</button>
        </div>
      </div>
    );
  }
}

export default WebDev;