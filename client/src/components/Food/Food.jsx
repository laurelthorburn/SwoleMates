import React, { useState, useEffect } from "react";
const API_KEY = "?apiKey=f8a19463536b4ffb8c05cdb882afb0c8";

const FoodBar = () => {
  const [foodID, setFood] = useState({});
  const [foodCalories, setCalories] = useState("");
  const [foodSugars, setSugars] = useState("");
  const [foodProtein, setProtein] = useState("");
  const [foodFat, setFat] = useState("");
  const [foodSodium, setSodium] = useState("");

  var foodSearchItem = "banana";

  useEffect(() => {
    fetchFood("banana");
  }, []);

  useEffect(() => {
    fetchNutrients(foodID);
  }, [foodID]);

  const fetchFood = (foodSearchItem) => {
    let fetchFoodUrl = `https://api.spoonacular.com/food/ingredients/search${API_KEY}&query=${foodSearchItem}&number=1`;
    fetch(fetchFoodUrl)
      .then((res) => res.json())
      .then((data) => {
        setFood(data.results[0].id);
      });
  };

  const fetchNutrients = (foodID) => {
    let fetchFoodUrl = `https://api.spoonacular.com/food/ingredients/${foodID}/information?amount=1&apiKey=f8a19463536b4ffb8c05cdb882afb0c8`;
    fetch(fetchFoodUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCalories(data.nutrition.nutrients[17].amount);
        setSugars(data.nutrition.nutrients[19].amount);
        setProtein(data.nutrition.nutrients[31].amount);
        setFat(data.nutrition.nutrients[1].amount);
        setSodium(data.nutrition.nutrients[3].amount);
      });
  };

  return (
    <div className="foodItem">
      <p>Here some information about a {foodSearchItem}</p>
      <div>
        <div className="foodbar-text">
          <h2> We have that many cal: {foodCalories}</h2>
          <h2>Here is some more info about nutriens for : </h2>

          <br />

          <h2> Sugars: {foodSugars} </h2>
          <h2> Sodium: {foodSodium}</h2>
          <h2> Fat: {foodFat}</h2>
          <h2> Protein: {foodProtein} </h2>
        </div>
      </div>
    </div>
  );
};

export default FoodBar;