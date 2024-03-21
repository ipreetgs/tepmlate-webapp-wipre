// CarouselComponent.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src="/pexel1.jpg" alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="/pexel2.jpg" alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="/pexel3.jpg" alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
