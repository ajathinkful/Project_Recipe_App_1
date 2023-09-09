import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onDelete }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
