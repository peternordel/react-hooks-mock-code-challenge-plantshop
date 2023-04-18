import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
 
  const [searchQuery, setSearchQuery] = useState("")

  function handleChange (e) {
    setSearchQuery(e.target.value)
  }

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
      .then((res)=>res.json())
      .then((data)=> setPlantData(data))
  },[])

  const displayPlants = plantData.filter((plant) => {
    return plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  })
  
  return (
    <main>
      <NewPlantForm setPlantData={setPlantData} />
      <Search searchQuery={searchQuery} handleChange={handleChange} />
      <PlantList displayPlants={displayPlants} setPlantData={setPlantData}/>
    </main>
  );
}

export default PlantPage;
