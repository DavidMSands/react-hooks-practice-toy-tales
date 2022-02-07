import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, donateToy }) {
  return (
    <div id="toy-collection">
      {toys.map(toy => (
        <ToyCard 
        donateToy={donateToy}
        key={toy.id} 
        id={toy.id}
        name={toy.name}  
        image={toy.image} 
        likes={toy.likes} 
        />
      ))}
      
    </div>
  );
}

export default ToyContainer;
