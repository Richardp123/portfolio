import React, { Component } from 'react';
import './comps.css';
import Mountains from '../img/mountains.svg';
import TreeLine from '../img/treeLine.svg';
import MoveClouds from '../img/moveClouds.svg';
import BackClouds from '../img/backClouds.svg';

class MountainScene extends Component {
  render() {
    return (
      <div className="MountainScene">
        <img src={BackClouds} className="backClouds" />
        <img src={MoveClouds} className="moveClouds" />
        <img src={Mountains} className="mountains" />
        <img src={TreeLine} className="treeLine" />
      </div>
    ); 
  }
}

export default MountainScene;
