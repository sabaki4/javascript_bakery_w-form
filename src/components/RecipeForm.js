import { useState } from "react";

const RecipeForm = ({addRecipe }) => {
  const [cakeName, setCakeName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      const newRecipe = {
        cakeName,
        ingredients: ingredients.split(","),
        rating,
      };
      addRecipe(newRecipe);
      return;
    }
    alert(error);
  };

  const validation = () => {
    let isValid = true;

    if (cakeName === "" || ingredients === "" || rating === "") {
      alert("Please fill in all fields!");
      isValid = false;
    }
    return isValid;
  };

  return (
    <>
      <h2>Add your recipe here!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cakeName"
          placeholder="Enter cake name"
          value={cakeName}
          onChange={(event) => setCakeName(event.target.value)}
        />

        <input
          type="text"
          name="ingredients"
          placeholder="Enter the ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />

        <input
        type = "number"
        name = "rating"
        placeholder="Enter a rating"
        value = {rating}
        onChange={(event) => setRating(event.target.value)}
        />

        <input type = "submit" value = "Submit"/>
      </form>
    </>
  );
};

export default RecipeForm;