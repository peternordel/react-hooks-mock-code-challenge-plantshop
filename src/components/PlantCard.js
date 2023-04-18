import React, { useState } from "react";

function PlantCard({ plant, setPlantData, index }) {
  
  const {id, name, image, price} = plant

  const [isInStock, setIsInStock] = useState(true)
  const [isEditing, setIsEditing] = useState(false)

  function handleClick(){
    setIsInStock(!isInStock)
  }

  function handleDelete () {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE'
    })
    .then(setPlantData(prevPlantData => {
      prevPlantData.splice(index, 1)
      return [...prevPlantData]
    }))
  }

  function handleEdit () {
    if(isEditing) {
      fetch(`http://localhost:6001/plants/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({price})
      })
    }

    setIsEditing(!isEditing)
  }

  function handleChange (e) {
    setPlantData(prevPlantData => {
      prevPlantData[index].price = parseFloat(e.target.value)
      return [...prevPlantData]
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {isEditing ? (<p style={{display: 'inline', whiteSpace: 'nowrap', margin: '4px'}}>Price: $
        <input 
          className="edit-price-input-box"
          type="number"
          id="price"
          onChange={handleChange}
          value={price}
        />
      </p>
      ) : (
        <p style={{margin: '4px'}}>Price: ${parseFloat(price).toFixed(2)}</p>
      )}
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button className="primary" style={{marginLeft: '5px'}} onClick={handleDelete}>Delete</button>
      <br />
      {isEditing ? (
        <button className="primary" onClick={handleEdit}>Submit Change</button>
      ) : (
        <button onClick={handleEdit}>Edit Price</button>
      )}
    </li>
  );
}

export default PlantCard;
