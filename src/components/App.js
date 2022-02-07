import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [newToy, setNewToy] = useState('')
  const [newImage, setNewImage] = useState('')

  const BASE_URL = 'http://localhost:3001/toys'


  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(toysArry => {
      setToys(toysArry)
    })
  }, [])

  function handleFormSubmit (e) {
    e.preventDefault()
    const newObj = {
      name: newToy,
      image: newImage,
      likes: 0
    };
    const updatedToys = [...toys, newObj]
    setToys(updatedToys)
    fetch(BASE_URL, {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newObj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  function donateToy(id) {
    const updatedToys = toys.filter(toy => toy.id !== id)
    setToys(updatedToys)
    fetch(BASE_URL + `/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  function likeToy(newLike) {

  }

  function handleImageChange(e) {
    setNewImage(e.target.value)
  }

  function handleNameChange(e) {
    setNewToy(e.target.value)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNameChange={handleNameChange} handleImageChange={handleImageChange} handleFormSubmit={handleFormSubmit} newToy={newToy} newImage={newImage} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer donateToy={donateToy} toys={toys} />
    </>
  );
}

export default App;
