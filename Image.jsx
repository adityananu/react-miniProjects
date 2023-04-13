import React from "react";
import nanu from '../assets/jambe.png';
import god from '../assets/Godzilla_2021.jpg';
import './Image.css';


const Image = () => {
  return (
    <div className="section__all">
      <div className="first__div">
        <div className="content">
          <h3>Aditya Nanu</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            vitae officiis dolores eius suscipit minima molestiae ratione quidem
            molestias, fugit, dolor aperiam libero expedita tempore nostrum
            quisquam est incidunt inventore.
          </p>
        </div>
        <div className="image__div">
        <img src={nanu} alt="" />
        </div>
      </div>
      <div className="first__div">
        <div className="content">
          <h3>Godzilla</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            vitae officiis dolores eius suscipit minima molestiae ratione quidem
            molestias, fugit, dolor aperiam libero expedita tempore nostrum
            quisquam est incidunt inventore.
          </p>
        </div>
        <div className="image__div">
        <img src={god} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Image;
