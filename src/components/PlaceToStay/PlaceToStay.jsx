import React from "react";
import placeToStayHousesData from "../../placeToStayHousesData";
import Cards from "../Cards/Cards";
import "./PlaceToStay.css";
import Settings from "../../assets/settings.webp";

function PlaceToStay() {
  const placeToStayHouseCards = placeToStayHousesData.map(
    (placeToStayHouseCard) => {
      return <Cards key={placeToStayHouseCard.id} {...placeToStayHouseCard} />;
    }
  );

  return (
    <section className="place-to-stay-container">
      <div className="filters">
        <p>Restaurant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off grid</p>
        <p>Farm</p>
        <button className="location">
          Location <img src={Settings} className="settings" />
        </button>
      </div>
      <div className="place-to-stay-house-cards">{placeToStayHouseCards}</div>
    </section>
  );
}

export default PlaceToStay;
