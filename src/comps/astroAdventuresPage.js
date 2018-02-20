import React, { Component } from 'react';
import './comps.css';

class AstroAdventuresPage extends Component {
  render() {
      
    return (
      <div className="projectPages">
        
        
        
       <div className="projectDiv1">
        
              <div className="displayImg" id="astroAdventuresProg"></div>
                <div className="aboutProj">
              <h1>Astro-Adventures</h1>
                <h3>From Ideation to Creation</h3>
          <p>_____________________________________________</p>
                <p>Astro-Adventures was my first project at BCIT. This was when I had just learn&apos;t HTML5, and CSS3.</p>
          </div>
        </div>
          <div className="projectDiv">
              <div className="displayImg" id="astroAdventuresFin"></div>
                <div className="aboutProj">
              <h1>Finished Project</h1>
          <p>_____________________________________________</p>
                <p>Astro-Adventures turned out to be a fun project and a learning experience for making website layouts.</p>
          <h2>What I Used</h2>
          
        <div className="aboutMeIconsProj">
        <i className="devicon-html5-plain"></i>
        <i className="devicon-css3-plain"></i>
        <i className="devicon-illustrator-plain"></i>
        </div>
        </div>
         
        </div>
        <div className="linkDiv">
        <a className="projBut linkBut" href='http://richardpercival.ca/astroadventures/' target="_blank">View Astro-Adventures</a>
        </div>
      </div>
    );
  }
}

export default AstroAdventuresPage;
