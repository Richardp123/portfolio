import React, { Component } from 'react';
import './comps.css';
import BerritonPage from './BerritonPage.js';

class WebDev extends Component {
    constructor(props){
        super(props)
        this.state ={
            webdevpage: true,
            graphicdesignpage: false,
            seeBerriton: false,
        }
        
    }
    
    workbut1 = () =>{
        this.setState({
             webdevpage: true,
            graphicdesignpage: false,
            seeBerriton: false,
        });
        console.log("workbut1 clicked");
    }
    
    workbut2 = () =>{
        this.setState({
             webdevpage: false,
            graphicdesignpage: true,
            seeBerriton: false,
        });
        console.log("workbut2 clicked");
    }
    
    goBerriton = () =>{
        this.setState({
             webdevpage: false,
            graphicdesignpage: false,
            seeBerriton: true,
        });
        console.log("berriton clicked");
    }
    
  render() {
      
      var workpage = null;
      
      if(this.state.webdevpage == true){
          
          
          workpage = <div className="webDevelopment">
              
              
             
          <div className="projectDiv">
              <div className="displayImg" id="berritonFin"></div>
                <div className="aboutProj">
              <h1>finished proj</h1>
                <h3>this is whats what</h3>
          <p>_____________________________________________</p>
                <p>Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, Lorem ipsum amet dolor amet sit gil library, </p>
                <button className="projBut" onClick={this.goBerriton}>See This Project!</button>
          </div>
        </div>
         
                
                
          </div>;
      } else if(this.state.graphicdesignpage == true){
          
          workpage = <div className="graphicDesign"></div>;
          
      } else if(this.state.seeBerriton == true){
          
          workpage = <BerritonPage />;
          
      }
      
    return (
      <div className="webDevDiv">
        {workpage}
        <div className="workButs">
        <button className="workBut" onClick={this.workbut1}>Web Development</button>
        <button className="workBut" onClick={this.workbut2}>Graphic Design</button>
        </div>
      </div>
    );
  }
}

export default WebDev;