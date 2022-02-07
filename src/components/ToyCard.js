import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

function ToyCard({ name, image, likes, donateToy, id }) {
  const [currentLikes, setCurrentLikes] = useState(likes)

  function handleLikes(id) {
    setCurrentLikes(currentLikes => currentLikes + 1)
   
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys' + `/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        likes: currentLikes,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [currentLikes])
  
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{currentLikes} Likes </p>
      <button className="like-btn" onClick={() => handleLikes(id)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => donateToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
