import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            asperiores dicta. Quos expedita sapiente eligendi autem pariatur,
            laudantium ex facere excepturi et velit modi sequi in labore illum
            accusantium officiis! Tempore, magnam nihil ut dolorem assumenda
            perferendis sapiente nemo quas soluta nam omnis doloribus saepe
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
