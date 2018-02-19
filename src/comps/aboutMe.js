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
        <p>Hey! My name is Richard Percival, I&apos;m a front-end web developer who also has a passion for art/design. <br/><br/>
        I am currently a student in my last semester at the British Columbia Institute of Technology doing the Digital Design, and Development program. In this program I have learn&apos;t many things and have found a passion for web development. </p>
        </div>
        </div>
        
        
        <div className="whatIDo">
        <h1>What I Do</h1>
        <h3>_________________</h3>
        
        
        <div className="whatIDoFlex">
        <div className="whatIDo1">
        <h2>Front-End Web Development</h2>
        <p>I build websites and web apps that are responsive, and user friendly.</p>
        </div>
        
        <div className="whatIDo2">
        <h2>UI / UX Design</h2>
        <p>I love a beautiful website. I ensure that all of my websites are intuitive and easy to navigate</p>
        </div>
        </div>
        </div>
        
        
        <div className="whatIUse">
        <h1>What I Use</h1>
        <h3>________________</h3>
        <p>I use a wide variety of design, and development tools to get my work done. <br /> Here are some of the tools I use to do that</p>
        <div className="aboutMeIcons">
        
        <h2>Development</h2>
        
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-html5-plain"></i>
        <i class="devicon-react-original"></i>
        <i class="devicon-css3-plain"></i>
        <i class="devicon-sass-original"></i>
        <i class="devicon-github-plain"></i>
        <i class="devicon-heroku-original"></i>
        <i class="devicon-wordpress-plain"></i>
        <i class="devicon-bootstrap-plain"></i>
        <i class="devicon-nodejs-plain"></i>*
        <i class="devicon-php-plain"></i>*
        
        <h2>Design</h2>
        
        <i class="devicon-illustrator-plain"></i>
        <i class="devicon-photoshop-plain"></i>
        <p>* = beginner working knowledge of </p>
        
        </div>
        </div>
        
        
      </div>
    );
  }
}

export default AboutMe;