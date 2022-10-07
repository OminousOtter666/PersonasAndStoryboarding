import React, { Component } from "react";
import "./Interviews.css";
import student1 from "../assets/student1.png";
import student2 from "../assets/student2.png";
import student3 from "../assets/student3.png";

export default class Interviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.responses[0],
    };
  }
  students = [student1, student2, student3];
  questions = [
    "What are your goals when using this interface?",
    "How well did this interface allow you to achieve your goals?",
    "How confident are you in your ability to describe how to use this interface to someone who has never seen it before?",
    "How would you rate this interface in terms of user experience?",
  ];
  responses = [
    [
      "as the leader of a prominent club on campus, I use this interface to project slideshows during general body meetings",
      "i was able to present everything at the meeting, although i have had to run many meetings using this device in the past",
      "honestly, i could probably only tell them how to do exactly what i do, but couldn't really provide any other information",
      "probably like a 3.5",
    ],
    [
      "sometimes i'll host Survivor watch parties in empty classrooms, so all i really want to do is get video on the larger screen",
      "it worked great, although we had to use my friend's laptop since i didn't have the right cable port. the airmedia option was too laggy to use",
      "i feel like i could probably show them how to connect their computer and maybe play around with some of the other options, but it would be a lot of guessing",
      "hmm maybe a 4? it's pretty cool to be able to project things from your computer but it's annoying to set up sometimes",
    ],
    [
      "i use these devices most days during lecture since i like to present the slides from my computer",
      "it works okay but it gets really frustrating trying to find the right settings to get everything set up",
      "i don't think i could explain how to use it to anyone else, i struggle to use it myself sometimes!",
      "i would give the interface a 3, if someone as old as i am can still manage to use it, it can't be that bad"
    ],
  ];
  render() {
    const setSelected = (i) => {
      return this.setState((state) => {
        return { state, selected: this.responses[i] };
      });
    };
    return (
      <div>
        <h1>Interviews</h1>
        <p className="interview-subtitle">
          <i>
            meet users of the interface! click on each user's icon to learn more
            about their experience!
          </i>
        </p>
        <div className="interview-body">
          <div className="interview-toggles">
            {this.students.map((s, i) => {
              return (
                <div
                  className="interview-button"
                  onClick={() => setSelected(i)}
                >
                  <img src={s} alt="" className="interview-image" />
                </div>
              );
            })}
          </div>
          <div className="interview-questions">
            {this.questions.map((q, i) => {
              return (
                <div className="interview-response">
                  <div>
                    <h3
                      className="interview-question
                "
                    >
                      {q}
                    </h3>
                  </div>
                  <div className="interview-answer">
                    {this.state.selected[i]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
