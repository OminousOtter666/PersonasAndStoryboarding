import React, { Component } from "react";
import ComicCard from "./ComicCard";
import "./Storyboard.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";

export default class Storyboard extends Component {
  stories = [
    {
      img: s1,
      caption: "Peeved Professor arrives in their classroom right as the lecture is scheduled to begin. They would like to show a video from the internet to aid in today's lesson.",
    },
    {
      img: s2,
      caption: "The Professor attempts to plug in their computer, but immediately gets overwhelmed with the number of cord options. After some fumbling they are able to connect their computer",
    },
    {
      img: s3,
      caption: "To start the projector, the Professor selects 'Airmedia' on the touchscreen, which has an icon depicting an arrow pointing to a board",
    },
    {
      img: s4,
      caption: "The board displays an error message despite the computer being plugged in. The students in wait patiently as Peeved Professor becomes annoyed",
    },
    {
      img: s5,
      caption: "A student in the back of the classroom points out that the projector must be set to the 'laptop' setting when making a wired connection",
    },
    {
      img: s6,
      caption: "After pressing the correct button, the computer successfully connects to the projector (after multiple minutes of technical difficulties)",
    },
  ];
  render() {
    return (
      <div className="story-container">
        <h1>Storyboard</h1>
        <div className="story-display">
          {this.stories.map(story => {
            return <ComicCard img={story.img} caption={story.caption} />
          })}
        </div>
      </div>
    );
  }
}
