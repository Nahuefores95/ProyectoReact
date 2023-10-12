// GridContainer.js
import React, { useEffect } from 'react';


function GridContainer() {
  useEffect(() => {
    const handleScroll = () => {
      const gridContainerOne = document.querySelector('.gridContainerOne');
      const gridContainerFour = document.querySelector('.gridContainerFour');
      const gridContainerFive = document.querySelector('.gridContainerFive');

      const windowHeight = window.innerHeight * 0.6;

      if (gridContainerOne) {
        const gridContainerOneTop = gridContainerOne.getBoundingClientRect().top;
        if (gridContainerOneTop <= windowHeight) {
          gridContainerOne.classList.add('show');
        }
      }

      if (gridContainerFour) {
        const gridContainerFourTop = gridContainerFour.getBoundingClientRect().top;
        if (gridContainerFourTop <= windowHeight) {
          gridContainerFour.classList.add('show');
        }
      }

      if (gridContainerFive) {
        const gridContainerFiveTop = gridContainerFive.getBoundingClientRect().top;
        if (gridContainerFiveTop <= windowHeight) {
          gridContainerFive.classList.add('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="containerGridOne">
      <div className="gridContainerOne">
        <h2>Modelado 2D</h2>
        <p>Realizamos planos de piezas mecánicas, y también de obras incluyendo los planos de las diferentes energías a utilizar.</p>
        <button>Conoce más</button>
      </div>
      <div className="gridContainerTwo">
        <img src="../img/plano2d.jpg" alt="Plano 2D" />
      </div>
      <div className="gridContainerThree">
        <img src="../img/autocad3d.jpg" alt="AutoCAD 3D" />
      </div>
      <div className="gridContainerFour">
        <h2>Modelado 3D</h2>
        <p>Trabajamos con modelos personalizados de diferentes personajes animados, también con bustos de famosos y entre otros modelos pueden encontrar con forma de camiones, autos y también de diferentes clubes.</p>
        <button>Conoce más</button>
      </div>
      <div className="gridContainerFive">
        <h2>Escaneo 3D</h2>
        <p>Contamos con escáneres 3D semiprofesionales para llevar a cabo el modelado en tres dimensiones de tus piezas, figuras y hasta personas.</p>
        <button>Conoce más</button>
      </div>
      <div className="gridContainerSix">
        <img src="../img/escaner creality.jpg" alt="Scanner Creality" />
      </div>
    </div>
  );
}

export default GridContainer;