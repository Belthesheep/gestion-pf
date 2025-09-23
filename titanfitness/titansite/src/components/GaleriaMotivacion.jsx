import React, { useState } from "react";
import "../index.css"; // para que use los estilos globales

const GaleríaMotivacion = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: "dominada.png", alt: "Ejercicio 1" },
    { src: "pesomuerto.png", alt: "Ejercicio 2" },
    { src: "pressdebanca.png", alt: "Ejercicio 3" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="galeria-motivacion">
      <button onClick={prevImage}>&lt;</button> {/* Flecha izquierda */}
      <div className="imagenes">
        <div className="imagen-central">
          <img src={images[currentImage].src} alt={images[currentImage].alt} />
        </div>
      </div>
      <button onClick={nextImage}>&gt;</button> {/* Flecha derecha */}
      <p className="frase">
         “Ningún hombre es libre que no sea dueño de sí mismo."
         <p className="autor">
          Epicteto</p>
                          
      </p>
    </div>
  );
};

export default GaleríaMotivacion;