import React, { Component } from "react";
import airplay from '../assets/airplay.png';
import laptop from '../assets/laptop.png';
import down from '../assets/arrow-down.png';
import up from '../assets/arrow-up.png';
import power from '../assets/power.png';
import slider from '../assets/slider.png';
import projector from '../assets/projector.svg'
import settings from '../assets/settings.svg'
import star from '../assets/star.svg'


import "./Interface.css";

export default class Interface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Interactive Interface",
      content: "Click on elements on the interface to learn more about them!"
    }
  }

  info = {
    airplay: {
      title: "Airplay Mode",
      content: "this mode enables wireless projection; the user is required to navigate to a specific IP address in their browser and enter the provided code"
    },
    laptop: {
      title: "Laptop Mode",
      content: "this mode enables a wired projection; the user must plug their laptop into the system using the cables provided in the classrooms"
    },
    basic: {
      title: "Basic Mode Options",
      content: "the default screen for displaying options; only displays 'airmedia' and 'laptop' modes"
    },
    advanced: {
      title: "Advanced Mode Options",
      content: "toggles a menu with more specific options including: audio/video routing, display controls, camera controls, and an admin panel"
    },
    mute: {
      title: "Mute Display Option",
      content: "this button toggles the visibility of the display without powering off the system"
    },
    volume: {
      title: "Volume Controls",
      content: "basic controls for audio output; includes volume up, volume down, and mute"
    },
    power: {
      title: "Shutdown & Reset",
      content: "toggles a menu with two options: shutdown system, and reset to default"
    },
  }

  


  render() {
    const toggleContent =  (button) => {
      this.setState(state => {
        return {...state, title: this.info[button].title, content: this.info[button].content}
      })
    }
    return (
      <div>
        <h1>Interface</h1>

        <div className="interface-body">
          <div className="interface-container">
            <div className="interface-screen">
              <div className="mode-selection">
                <div className="mode-header">BASIC MODE</div>
                <div className="mode-content">
                  <div className="mode-item" onClick={() => toggleContent("airplay")}>
                    <img src={airplay} alt="airplay" className="interface-icon"/>
                    airplay
                  </div>
                  <div className="mode-item" onClick={() => toggleContent("laptop")}> 
                  <img src={laptop} alt="laptop" className="interface-icon"/>
                  laptop</div>
                </div>
                <div className="mode-footer">
                  Connect to airmedia for wireless projection
                </div>
              </div>
              <div className="interface-panel">
                <div className="interface-button" onClick={() => toggleContent("basic")}>
                  <img src={star} alt="" className="interface-nav-icon"/> basic
                </div>
                <div className="interface-button" onClick={() => toggleContent("advanced")}>
                <img src={settings} alt="" className="interface-nav-icon"/>
                  advanced
                </div>
                <div className="interface-button" onClick={() => toggleContent("mute")}>
                <img src={projector} alt="" className="interface-nav-icon"/> 
                  mute
                </div>
                <div className="interface-volume">
                  <div className="volume-buttons">
                    <div className="volume-button" onClick={() => toggleContent("volume")}>
                      <img src={up} alt="" className="volume-icon"/>
                    </div>
                    <div className="volume-button" onClick={() => toggleContent("volume")}>
                      VOL
                    </div>
                    <div className="volume-button" onClick={() => toggleContent("volume")}>
                    <img src={down} alt="" className="volume-icon"/>
                    </div>
                  </div>
                  <div className="volume-slider">
                    <img src={slider} alt="" className="volume-slider-icon"/>
                  </div>
                </div>
                <div className="interface-button" onClick={() => toggleContent("power")}>
                  <img src={power} alt="" className="interface-nav-icon"/>
                  power off
                </div>
              </div>
            </div>
          </div>
          <div className="interface-desc">
            <h2>{this.state.title}</h2>
            <p>{this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
