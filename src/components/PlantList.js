import React from "react";
import PlantCard from "./PlantCard";

function PlantList({displayPlants, setPlantData}) {
  const plantDataList = displayPlants.map((plant, index) => {
    return <PlantCard key={plant.id} plant={plant} setPlantData={setPlantData} index={index}/>
  })

  return (
    <ul className="cards">
      {plantDataList}
    </ul>
  );
}

export default PlantList;
