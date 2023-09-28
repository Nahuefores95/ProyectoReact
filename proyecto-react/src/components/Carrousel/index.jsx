import Carousel from 'react-bootstrap/Carousel';




function CarouselComponent() {
    return (
      <Carousel>
        <Carousel.Item className='justify-content-center  align-items-center'>
          <img
            className="w-100"
            src="../img/bobesponja.JPG"
            alt="Set bob esponja"
          />
          <Carousel.Caption>
            <h3>Set de porta virulana de Bob Esponja</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='justify-content-center  align-items-center'>
          <img
            className="w-100"
            src="../img/Cocafernet.jpg"
            alt="Llavero Coca - Fernet"
          />
          <Carousel.Caption>
            <h3>Llavero Coca - Fernet</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='justify-content-center  align-items-center'>
          <img
            className="w-100"
            src="../img/velador luna.JPG"
            alt="Velador Luna"
          />
          <Carousel.Caption>
            <h3>Velador Luna</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='justify-content-center  align-items-center'>
          <img
            className="w-100"
            src="../img/Stitch.jpg"
            alt="Mate Stitch"
          />
          <Carousel.Caption>
            <h3>Mate Stitch</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='justify-content-center  align-items-center'> 
          <img
            className="w-100"
            src="../img/velador dragon.JPG"
            alt="Velador Dragon"
          />
          <Carousel.Caption>
            <h3>Velador Dragón GOT</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default CarouselComponent