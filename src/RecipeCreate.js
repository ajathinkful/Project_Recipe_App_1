import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo URL</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="form-field">
              {" "}
              {/* Added class name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </td>
            <td className="form-field">
              {" "}
              {/* Added class name */}
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            <td className="form-field">
              {" "}
              {/* Added class name */}
              <input
                type="url"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={formData.preparation}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
