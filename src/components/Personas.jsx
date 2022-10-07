import React, { Component } from "react";
import "./Personas.css";
import professor from "../assets/professor.svg";
import student from "../assets/student_leader.svg";

export default class Personas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Empathy Map",
      content: ["Press the buttons to learn more about each Persona!"]
    };
  }

  personas = {
    student: {
      thinks: [
        "- I better get to the classroom early to set up the presentation",
        "- I hope I don't have any technical issues while the group's members are there",
      ],
      feels: [
        "- Insecure if they are not able to figure out",
        "- Anxious about having technical difficulties in the middle of the presentation",
      ],
      says: [
        '- "These things are so frustrating aren\'t they"',
        "- \"It's a good thing I'm not old, otherwise, I'd have no idea how to turn this on\"",
        '- "Has anyone used the projector before that would like to help me set it up?"',
      ],
      does: [
        "- Asks other group members for help setting up the presentation",
        "- Gets to the meeting early to make sure there won't be any technical difficulties",
        "- Uses the system for simple hour-long presentations on occasion",
      ],
    },
    professor: {
      thinks: [
        "- Why is this screen blocking my blackboard!?",
        "- I'm already late to class, I'd rather be teaching than fumbling with devices",
      ],
      feels: [
        "- Pressured to complete their lecture without interruption",
        "- Frustrated that they are not able to use the control",
      ],
      says: [
        '- "Hang with me while I figure this out"',
        '- "Can one of you students come help me with this"',
        '- "I\'m going to have to call tech support to turn this off"',
      ],
      does: [
        "- Gets flustered having to manipulate the confusing UI while their class watches",
        "- Complains constantly about how confusing it is to turn off the screen",
        "- Accidentally closes the blinds while trying to shut off the projector",
      ],
    },
  };

  render() {
    const toggleContent = (persona, info) => {
      switch (persona) {
        case "professor":
          this.setState({
            ...this.state,
            title: `Peeved Professor ${info}:`,
            content: this.personas[persona][info],
          });
          break;
        case "student":
          this.setState({
            ...this.state,
            title: `Successful Student-Leader ${info}:`,
            content: this.personas[persona][info],
          });
          break;
        default:
          break;
      }
    };

    return (
      <div>
        <h1>Personas</h1>
        <div className="personas-body">
          <div className="personas-person">
            Peeved Professor
            <img src={professor} alt="" className="personas-icon" />
            <div className="personas-toggles">
              <div
                className="personas-button"
                onClick={() => toggleContent("professor", "thinks")}
              >
                thinks
              </div>
              <div
                className="personas-button"
                onClick={() => toggleContent("professor", "feels")}
              >
                feels
              </div>
              <div
                className="personas-button"
                onClick={() => toggleContent("professor", "says")}
              >
                says
              </div>
              <div
                className="personas-button"
                onClick={() => toggleContent("professor", "does")}
              >
                does
              </div>
            </div>
          </div>
          <div className="personas-information">
            <h2>{this.state.title}</h2>
            {this.state.content.map(line => {
              return <p>{line}</p>
            })}
          </div>
          <div className="personas-person">
            Successful Student-Leader
            <img src={student} alt="" className="personas-icon" />
            <div className="personas-toggles">
              <div
                className="personas-button"
                onClick={() => toggleContent("student", "thinks")}
              >
                thinks
              </div>
              <div
                className="personas-button"
                onClick={() => toggleContent("student", "feels")}
              >
                feels
              </div>
              <div
                className="personas-button"
                onClick={() => toggleContent("student", "says")}
              >
                says
              </div>
              <div
                className="personas-button"
                onClick={() => toggleContent("student", "does")}
              >
                does
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
