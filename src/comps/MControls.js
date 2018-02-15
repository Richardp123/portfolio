import React, { Component } from 'react';
import './comps.css';
import DeerLogo from '../img/deerlogo.svg';

class MControls extends Component {
    constructor(props){
        super(props);
        this.state={
            topcontrol: false,
        }
    }
    
    
    
    aboutMe = () => {
        this.props.aboutMe(true); 
    }
    
    toTopControl = () => {
        this.setState({
            topcontrol: true,
        })
    }
    
    toTopAndAboutMe = (event) =>{
        this.aboutMe();
        this.toTopControl();
    }
    
    webDev = () => {
        this.props.webDev(true);
    }
    
    contactMe = () => {
        this.props.contactMe(true); 
    }
    
    toTopAndContactMe = (event) =>{
        this.contactMe();
        this.toTopControl();
    }
    
    toTopAndWebDev = (event) =>{
        this.webDev();
        this.toTopControl();
    }
    
    homeBut = () =>{
        this.props.homeButClick(true);
    }

    backToBot = ()=>{
        this.setState({
            topcontrol: false,
        })
    }
    
    homeBackBot = () =>{
        this.homeBut();
        this.backToBot();
    }
    
  render() {
      
      var activeControl = "MControls";
      
      if(this.state.topcontrol == true){
          activeControl= "MControlsTop";
      } else if(this.state.topcontrol == false){
          activeControl= "MControls";
      }
      
    return (
      <div className={activeControl}>
        <button className="aboutMe" onClick = {this.toTopAndAboutMe}>Who am I?</button>
        <button className="webDev" onClick = {this.toTopAndWebDev}>Work</button>
        <button className="contactMe" onClick = {this.toTopAndContactMe}>Contact Me</button>
        <img src={DeerLogo} className="homeBut" onClick = {this.homeBackBot}></img>
      </div>
    );
  }
}

export default MControls;
