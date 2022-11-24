import React from "react";
import '../styles/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img className="imagen-producto" src={require("../images/1.jpg")} alt='Foto'/>
      <div className="contenedor-producto">

      </div>
    </div>
  );
}

export default Banner;
