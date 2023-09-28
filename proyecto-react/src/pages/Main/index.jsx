import CarouselComponent from "../../components/Carrousel";
import {Link} from 'react-router-dom'


const Main = () => {
  return (
    <div>
        <div className="clase1"> 
            <h1><br /><br />CHIMI 3D - Impresiones y Diseño 3D<br /><br /></h1>
            <h3><br /><br /> Trabajamos con insumos nacionales e importados de primera calidad, en impresoras 3D profesionales calibradas diariamente<br /><br /></h3>
            <p>
            <br />
            <br />
            Imprimimos todo tipo de modelos 3D, en diferentes tipos de materiales, tanto PLA, ABS y hasta Nylon 6 o 12.
            Ya sea a partir de un archivo generado en algún software de diseño, contamos con departamento de diseño a partir de planos o escaneo 3D, y también 
            realizamos impresiones de modelos descargados de internet.
            <br />
            <br /> 
            </p>
        </div>

        <div className="containerGrid">
            <div className="tituloGrid"><h2>Productos y servicios</h2></div>
            <div className="gridContainer">
            <div className="gridItem">
                <img className="gridImage" src="../img/Renga.jpeg" alt="Grinder La Renga" />
                <Link to="/category/Picadores">
                    <button className="gridH4" id="gridPicadores">Picadores / Grinders</button> 
                </Link>  
            </div>
            <div className="gridItem">
                <Link to="/category/Llavero">
                    <img className="gridImage" src="../img/Cocafernet.jpg" alt="Llavero Fernet coca" />
                </Link>
                <button className="gridH4" id="gridLlavero">Llaveros personalizados</button>       
            </div>
            <div className="gridItem">
                <Link to="/category/Mates">
                    <img className="gridImage" src="../img/Fort.jpg" alt="Mate Fort" />
                </Link>
                <button className="gridH4" id="gridMates">Mates Personalizados</button>      
            </div>
            <div className="gridItem">
                <Link to="/category/Veladores">
                    <img className="gridImage" src="../img/velador luna.JPG" alt="Velador luna" />
                </Link>
                <button className="gridH4">Veladores</button>
            </div>
            <div className="gridItem">
                <Link to="/category/Otros">
                    <img className="gridImage" src="../img/bobesponja.JPG" alt="Autocad 3d" />
                </Link>
                <button className="gridH4">Otros modelos</button>
            </div>
            </div>
        </div>

        <div className="containerGridOne">
            <div className="gridContainerOne">
                <h2>Modelado 2D</h2>
                <p>Realizamos planos de piezas mecanicas, y tambien de obras incluyendo los planos de las diferentes energias a utilizar.</p>
                <button>Conoce más</button>
            </div>
            <div className="gridContainerTwo"><img src="../img/plano2d.jpg" alt="Plano 2d" /></div>
            <div className="gridContainerThree"><img src="../img/autocad3d.jpg" alt="Autocad 3d" /></div>
            <div className="gridContainerFour">
                <h2>Modelado 3D</h2>
                <p>Trabajamos con mates personalizados de diferentes personajes animados, tambien con bustos de famosos y entre otros modelos pueden encontrar con forma de camiones,
                    autos y tambien de diferentes clubes.</p>
                <button>Conoce más</button>
            </div>
            <div className="gridContainerFive">
                <h2>Escaneo 3D</h2>
                <p>Contamos con escaners 3d semi-profesionales para poder llevar a cabo el modelado en tres dimensiones de tus piezas, figuras y hasta personas¡¡.</p>
                <button>Conoce más</button>    
            </div>
            <div className="gridContainerSix"><img src="../img/escaner creality.jpg" alt="Scanner creality" /></div>
        </div>

        <div className="carrousel">
        <h2>Últimos trabajos</h2>
            <CarouselComponent/> 
        </div>    
        

        
        
    </div>
  );
};

export default Main;