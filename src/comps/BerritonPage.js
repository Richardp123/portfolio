import React, { Component } from 'react';
import './comps.css';

class BerritonPage extends Component {
  render() {
      
    return (
      <div className="projectPages">
        
        
        
       <div className="projectDiv1">
        
              <div className="displayImg" id="berritonProg"></div>
                <div className="aboutProj">
              <h1>Berriton</h1>
                <h3>From Ideation to Creation</h3>
          <p>_____________________________________________</p>
                <p>Berriton started as a simple web-based storybook idea and quickly grew into something larger. During the development process of Berriton, I was tasked with building assets and writing HTML and CSS. Some challenges we faced were making Berriton completely responsive and making it all connect intuitively. We also wanted to make the game simple enough that one could pick it up and complete it without confusion.</p>
          </div>
        </div>
          <div className="projectDiv">
              <div className="displayImg" id="berritonFin"></div>
                <div className="aboutProj">
              <h1>Finished Project</h1>
          <p>_____________________________________________</p>
                <p>Berritons final product includes helping people, problem-solving, and exploring. Enter Berriton and speak to the townsfolk, discover their issues and find out how you can help.</p>
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
        <a className="projBut linkBut" href='http://richardpercival.ca/berriton/' target="_blank">View Berriton</a>
        </div>
      </div>
    );
  }
}

export default BerritonPage;
