import React, { Component } from 'react';
import './App.css';
import MountainScene from './comps/mountainScene.js';
import MControls from './comps/MControls.js';
import AboutMe from './comps/aboutMe.js';
import WebDev from './comps/webDev.js';

class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            homepage: true,
            nametag: true,
            aboutme: false,
            webdev: false,
        }
    }
    
    aboutMe = (show) => {
        this.setState({
            aboutme: show,
            nametag:false,
            webdev: false,
        });
    }
    
    webDev = (show) => {
        this.setState({
            aboutme: false,
            nametag:false,
            webdev: show,
        });
    }
    
    homeButClick = (show) => {
        this.setState({
            aboutme: false,
            nametag: show,
            webdev: false,
        });
    }
    
    
  render() {
      
      var activeComp = null;
      var nametag = null;
      var MainAboutMe = null;
      
      let activeScene = "";
      if(this.state.activeScene == true){
          activeScene = " activeScene";
          console.log("bickers")
      }
      
      if(this.state.homepage == true){
          activeComp = <div className={"MScene" + activeScene}><MountainScene /></div>
          nametag = <div className="nameTag"><h1>Richard Percival</h1><h3>Front-End Web Developer</h3></div>
      }
      if(this.state.aboutme == true){
          nametag = null;
          MainAboutMe = <div id="MAboutMe"><AboutMe /></div>;
          console.log("firecrabs");
      }
      if(this.state.webdev == true){
          nametag = null;
          MainAboutMe = <div id="MAboutMe"><WebDev /></div>;
          console.log("firecrabs2");
      }
      
      
      
    return (
      <div className="App">
        {activeComp}
        {nametag}
        {MainAboutMe}
        <div className="MainControls">
        <MControls aboutMe={this.aboutMe} webDev={this.webDev} homeButClick={this.homeButClick}/>
        
        </div>
      </div>
    );
  }
}

export default App;
