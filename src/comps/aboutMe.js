import React, { Component } from 'react';
import './comps.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMeDiv">
        <div className="whoAmI">
        <h1>Who am I?</h1>
        <h3>________________</h3>
        <div className="whoAmIFlex">
        <div className="richardPic"></div>
        <p>My name is Richard Percival, Im a developer who blah blah blah does lots of development stuff and wants a gosh darn job! hook me up bois im<b> desperate!!!!!</b> i have to do a practicum and i really do need a job for it orelse i wont even pass my program, its kind of stressfull....</p>
        </div>
        </div>
        
        
        <div className="whatIDo">
        <h1>What I Do</h1>
        <h3>_________________</h3>
        
        
        <div className="whatIDoFlex">
        <div className="whatIDo1">
        <h2>Front-End Web Development</h2>
        <p>My name is Richard Percival, Im a developer who blah blah blah does lots of development stuff and wants a gosh darn job! hook me up bois im desperate!!!!!</p>
        </div>
        
        <div className="whatIDo2">
        <h2>UI / UX Design</h2>
        <p>My name is Richard Percival, Im a developer who blah blah blah does lots of development stuff and wants a gosh darn job! hook me up bois im desperate!!!!!</p>
        </div>
        </div>
        </div>
        
        
        <div className="whatIUse">
        <h1>What I Use</h1>
        <h3>________________</h3>
        <p>I use a wide variety of design, and development tools to get my work done. <br /> here are some of the tools I use to do that</p>
        <div className="aboutMeIcons">
        
        <h2>Development</h2>
        
        <i class="devicon-react-original"></i>
        <i class="devicon-css3-plain"></i>
        <i class="devicon-github-plain"></i>
        <i class="devicon-heroku-original"></i>
        <i class="devicon-html5-plain"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-nodejs-plain"></i>
        <i class="devicon-php-plain"></i>
        <i class="devicon-sass-original"></i>
        <i class="devicon-wordpress-plain"></i>
        <i class="devicon-bootstrap-plain"></i>
        
        <h2>Design</h2>
        
        <i class="devicon-illustrator-plain"></i>
        <i class="devicon-photoshop-plain"></i>
        
        </div>
        </div>
        
        
      </div>
    );
  }
}

export default AboutMe;