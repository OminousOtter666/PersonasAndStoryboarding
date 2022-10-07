import React, { Component } from "react";
import "./ComicCard.css";

export default class ComicCard extends Component {
  render() {
    return (
      <div className="comic-container">
        <img src={this.props.img} alt="" style={{width: "20vw"}}/>
        <div className="comic-caption">{this.props.caption}</div>
      </div>
    );
  }
}
