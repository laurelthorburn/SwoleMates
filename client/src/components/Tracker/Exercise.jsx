import React, { useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
// import { ADD_EXERCISE } from "../../utils/mutations";

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      durationInMinutes: "",
      cardioDistanceInMiles: "",
      repetitions: "",
      sets: "",
      weight: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert(
      "Your exercise was submitted! \n"  
      + "\n "
      + "Exercise type: "  + this.state.type + "\n "
      + "Exercise duration: "  + this.state.durationInMinutes + " minutes" + "\n "
      + "Repetitions for weighted exercises: "  + this.state.cardioDistanceInMiles + " reps" + "\n "
      + "Number of sets: "  + this.state.cardioDistanceInMiles + " sets" + "\n "
      + "Used weights: "  + this.state.cardioDistanceInMiles + " lbs" + "\n "
      + "\n "
      + "Check calories burnt on your dashboard!"
    );
    event.preventDefault();
  }

  render() {
    return (
      <>
        Please, enter your exercise detail!
        <form onSubmit={this.handleSubmit}>
          <label>
            Type:
            <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.handleInputChange}
            />
          </label>

          <br />

          <label>
            Exercise duration:
            <input
              type="text"
              name="durationInMinutes"
              value={this.state.durationInMinutes}
              onChange={this.handleInputChange}
            />{" "}
            minutes;
          </label>

          <br />

          <label>
            Distance of cardio:
            <input
              type="number"
              name="cardioDistanceInMiles"
              value={this.state.cardioDistanceInMiles}
              onChange={this.handleInputChange}
            />{" "}
            miles;
          </label>

          <br />

          <label>
            Repetitions for weighted exercises:
            <input
              type="number"
              min="0"
              name="repetitions"
              value={this.state.repetitions}
              onChange={this.handleInputChange}
            />{" "}
            reps;
          </label>

          <br />

          <label>
            Number of sets:
            <input
              type="number"
              name="sets"
              value={this.state.sets}
              onChange={this.handleInputChange}
            />{" "}
            sets;
          </label>

          <br />

          <label>
            Used weights:
            <input
              type="number"
              name="weight"
              value={this.state.weight}
              onChange={this.handleInputChange}
            />{" "}
            lbs;
          </label>

          <p>Here we well display burnt calories!</p>

          <br />

         
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Exercise;
