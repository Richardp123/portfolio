import React, { Component } from 'react';
import './comps.css';

class BerritonPage extends Component {
  render() {
      
    return (
      <div className="projectPages">
        
        
        
       <div className="projectDiv">
        
              <div className="displayImg" id="berritonProg"></div>
                <div className="aboutProj">
              <h1>Berriton</h1>
                <h3>From Ideation, to Creation</h3>
          <p>_____________________________________________</p>
                <p>Berriton started as a simple web based storybook idea and quickly grew into something larger. During the development process of Berriton I was tasked with building assets, and writing HTML and CSS. Some challenges we faced were making Berriton completely responsive, and making it all connect intuitively. We also wanted to make the game simple enough that one could pick it up and complete it without confusion.</p>
          </div>
        </div>
          <hr/>
          <div className="projectDiv">
              <div className="displayImg" id="berritonFin"></div>
                <div className="aboutProj">
              <h1>Finished Project</h1>
          <p>_____________________________________________</p>
                <p>Berritons final product includes helping people, problem solving, and exploring. Enter Berriton and speak to the townfolk, discover their issues and find out how you can help.</p>
          <h2>What I Used</h2>
          
        <div className="aboutMeIcons">
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-html5-plain"></i>
        <i class="devicon-css3-plain"></i>
        <i class="devicon-illustrator-plain"></i>
        <i class="devicon-photoshop-plain"></i>
        </div>
          </div>
         <button className="projBut">View Berriton</button>
        </div>
      </div>
    );
  }
}

export default BerritonPage;
