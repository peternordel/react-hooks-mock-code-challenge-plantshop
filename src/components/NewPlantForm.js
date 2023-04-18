import React, { useState } from "react";

function NewPlantForm({ setPlantData }) {
  const [newPlantFormData, setNewPlantFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange (e) {
    const {name, value} = e.target
    setNewPlantFormData(prevNewPlantFormData => ({
      ...prevNewPlantFormData,
      [name]: value
    }))
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log(newPlantFormData)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPlantFormData)
    })
      .then((res)=>res.json())
      .then((data)=> setPlantData(prevPlantData => [...prevPlantData, data]))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlantFormData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlantFormData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlantFormData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
