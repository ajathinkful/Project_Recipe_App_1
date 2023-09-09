import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const handleDelete = (recipe) => {
    setRecipes(recipes.filter((r) => r !== recipe));
  };

  const handleCreate = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} onDelete={handleDelete} />
      <RecipeCreate onCreate={handleCreate} />
    </div>
  );
}

export default App;
