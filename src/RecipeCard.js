import React from "react";

function RecipeCard({ recipe, onDelete }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img
          src={recipe.photo}
          alt={recipe.name}
          style={{ width: "100px", height: "100px" }}
        />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => onDelete(recipe)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeCard;
