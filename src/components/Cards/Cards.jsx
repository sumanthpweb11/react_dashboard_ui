import React from "react";
import { cardsData } from "../../data/data";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        const { title, color, barValue, value, png, series } = card;
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={title}
              color={color}
              barValue={barValue}
              value={value}
              png={png}
              series={series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
