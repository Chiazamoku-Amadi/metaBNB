import React from "react";
import "./Cards.css";

function Card(inspirationHouseCard) {
  return (
    <div className="inspiration-house-card-container">
      <img
        src={inspirationHouseCard.picture}
        className="inspiration-house-picture"
      />
      <div>
        <p className="inspiration-house-title">{inspirationHouseCard.title}</p>
        <p className="inspiration-house-price">{inspirationHouseCard.price}</p>
      </div>
      <div>
        <p className="inspiration-house-distance">
          {inspirationHouseCard.distance}
        </p>
        <p className="inspiration-house-duration">
          {inspirationHouseCard.duration}
        </p>
      </div>
      <img src={inspirationHouseCard.rating} className="rating" />
    </div>
  );
}

export default Card;
