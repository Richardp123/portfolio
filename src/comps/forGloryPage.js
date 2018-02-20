import React, { Component } from 'react';
import './comps.css';

class ForGloryPage extends Component {
  render() {
      
    return (
      <div className="projectPages">
        
        
        
       <div className="projectDiv1">
        
              <div className="displayImg" id="forGloryProg"></div>
                <div className="aboutProj">
              <h1>For Glory</h1>
                <h3>From Ideation to Creation</h3>
          <p>_____________________________________________</p>
                <p>In the third term of my program at BCIT I was required to come up with an idea for a web app that would be made into a full-fledged app. I came up with the idea for For Glory and presented it to all the sets in my program then all the presented ideas were voted on. The ideas with the most votes then became our term projects, as For Glory was mine. </p>
          </div>
        </div>
          <div className="projectDiv">
              <div className="displayImg" id="forGloryFin"></div>
                <div className="aboutProj">
              <h1>Finished Project</h1>
          <p>_____________________________________________</p>
                <p>For Glory is an online, turn-based strategy card game, you take turns playing against another person using cards to boost your characters attack and defense.</p>
          <h2>What I Used</h2>
          
        <div className="aboutMeIconsProj">
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-html5-plain"></i>
        <i className="devicon-css3-plain"></i>
        <i className="devicon-illustrator-plain"></i>
        <i className="devicon-photoshop-plain"></i>
        </div>
        </div>
         
        </div>
        <div className="linkDiv">
        <a className="projBut linkBut" href='http://bcit-for-glory.herokuapp.com/' target="_blank">View For Glory</a>
        </div>
      </div>
    );
  }
}

export default ForGloryPage;
