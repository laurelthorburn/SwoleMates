import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../../utils/mutations";
import "./profile.css";

//need to add mutation like add user

const Profile = (props) => {
  const [inputFirstName, setFirstName] = useState("");
  const [inputLastName, setLastName] = useState("");
  const [inputAge, setAge] = useState(0);
  const [inputWeight, setWeight] = useState(0);
  const [inputFeet, setFeet] = useState(0);
  const [inputInches, setInches] = useState(0);
  const [inputSex, setSex] = useState("");
  const [inputActive, setActive] = useState("");
  const [inputGoal, setGoal] = useState("");

  const [addProfile, { error }] = useMutation(ADD_PROFILE);

  const handleSubmit = async (event) => {
    event.preventDefault();

    alert(`A name was submitted: ${inputFirstName} ${inputLastName} with the following information:
        ${inputAge}
        ${inputWeight}
        ${inputFeet}
        ${inputSex}
        ${inputActive}
        ${inputGoal}
        `);
    const inputHeight = inputFeet * 12 + inputInches;
    const payload = {
      firstName: inputFirstName,
      lastName: inputLastName,
      age: inputAge,
      weight: inputWeight,
      height: inputHeight,
      sex: inputSex,
      activity: inputActive,
      goal: inputGoal,
    };

    try {
      const { data } = await addProfile({
        variables: { ...payload },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-indigo-400 profile">
        <div className="profileContainer">
          Welcome, (future username here), please complete your profile to meet
          your future swole mate 💓
          <br />
          <input
            type="file"
            name="userPhoto"
            accept="image/png, image/gif, image/jpeg"
          />
          <br />
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={inputFirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={inputLastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Age:
              <input
                type="number"
                min="0"
                max="120"
                name="age"
                value={inputAge}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <br />
            <label>
              Weight:
              <input
                type="number"
                min="0"
                name="weight"
                value={inputWeight}
                onChange={(e) => setWeight(e.target.value)}
              />{" "}
              lbs
            </label>
            <br />
            <label>
              Height:
              <input
                type="number"
                min="1"
                max="8"
                name="feet"
                value={inputFeet}
                onChange={(e) => setFeet(e.target.value)}
              />{" "}
              feet
              <input
                type="number"
                min="0"
                max="11"
                name="inches"
                value={inputInches}
                onChange={(e) => setInches(e.target.value)}
              />{" "}
              inches
            </label>
            <br />
            Birth Sex:
            <select value={inputSex} onChange={(e) => setSex(e.target.value)}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <br />
            Exercise:
            <select
              value={inputActive}
              onChange={(e) => setActive(e.target.value)}
            >
              <option value="1.2"> Sedentary (little to no exercise)</option>
              <option value="1.375">
                Lightly Active (light exercise/sports 1-3 days/week)
              </option>
              <option selected value="1.55">
                Moderately Active (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="1.725">
                Very Active (hard exercise/sports 6-7 days a week)
              </option>
              <option value="1.9">
                Extra Active (very hard exercise/sports & physical job or 2x
                training)
              </option>
            </select>
            Goal:
            <select value={inputGoal} onChange={(e) => setGoal(e.target.value)}>
              <option value="gain">Gain muscle</option>
              <option value="lose">Lose fat</option>
              <option selected value="maintain">
                Maintain
              </option>
            </select>
            <br />
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;

// User profile, add photo
// User Name
// User age, weight, sex, lifestyle (see five options to choose from)
//ask user goal??
