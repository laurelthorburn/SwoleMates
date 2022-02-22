import React, { useState, useEffect } from "react";

const FoodBar = () => {
  // Setting up states to later use fetched data;

  const [foodCalories, setCalories] = useState("");
  const [foodSugars, setSugars] = useState("");
  const [foodProtein, setProtein] = useState("");
  const [foodFat, setFat] = useState("");
  const [foodSodium, setSodium] = useState("");

  const [foodItem, setFoodItem] = useState("");
  const [foodSearch, setFoodSearch] = useState("");

  // Set up info grab from the user - input line that saves value to our foodSearchItem;

  //   First API call to get food ID;
  const fetchFood = (foodItem) => {
    let fetchFoodUrl = `https://api.spoonacular.com/food/ingredients/search${process.env.REACT_APP_API_KEY_SPUNACULAR}&query=${foodItem}&number=1`;

    fetch(fetchFoodUrl)
      .then((res) => res.json())
      .then((data) => {
        fetchNutrients(data.results[0].id);
      });
  };

  // Second API call to get food by ID and its nutrients;
  const fetchNutrients = (foodID) => {
    let fetchFoodUrl = `https://api.spoonacular.com/food/ingredients/${foodID}/information?amount=1&apiKey=4dc6e7f4194e4576b347047373b2faee`;
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setFoodSearch(foodItem);
      fetchFood(foodItem);
    } catch (err) {
      window.location.assign('/food');
      console.log(err);
    }
  };

  return (
    <div className="foodItem">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Type a food item to search for nutrition information </label>
        <input
          type="text"
          name="foodItem"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Find info </button>
        <br />
      </form>

      {foodSearch ? (
        <div>
          <p>Here some information about a {foodItem}</p>
          <div>
            <div className="foodbar-text">
              <h2> We have that many cal: {foodCalories}</h2>
              <h2>Here is some more info about nutrients for : </h2>

              <br />
              <h2> Sugars: {foodSugars} </h2>
              <h2> Sodium: {foodSodium}</h2>
              <h2> Fat: {foodFat}</h2>
              <h2> Protein: {foodProtein} </h2>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FoodBar;
