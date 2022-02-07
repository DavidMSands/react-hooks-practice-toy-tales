import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function ToyForm({ newImage, newToy, handleFormSubmit, handleNameChange, handleImageChange }) {
  

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newImage}
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick={handleFormSubmit}
        />
      </form>
    </div>
  );
}

export default ToyForm;
