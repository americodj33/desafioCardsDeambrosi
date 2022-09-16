import React from "react";
import Card from "./Card";

import image1 from "../imagenes/barra.jpg";
import image2 from '../imagenes/barrasonos.jpg'
import image3 from '../imagenes/boofer.jpg'

const cards = [
  {
    id: 1,
    title: "Barra Sonos",
    image: image1,
    
  },
  {
    id: 2,
    title: "Sonos 2a version",
    image: image2,
    
  },
  {
    id: 3,
    title: "Boofer Sonos",
    image: image3,
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
