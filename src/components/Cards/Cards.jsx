import React from "react";
import "./Cards.css";

function Card(inspirationHouseCard) {
  return (
    <div>
      <img src={inspirationHouseCard.picture} />
      <div>
        <p>{inspirationHouseCard.title}</p>
        <p>{inspirationHouseCard.price}</p>
      </div>
      <div>
        <p>{inspirationHouseCard.distance}</p>
        <p>{inspirationHouseCard.duration}</p>
      </div>
      <img src={inspirationHouseCard.rating} />
    </div>
  );
}

export default Card;
