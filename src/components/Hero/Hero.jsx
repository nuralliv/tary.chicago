// Hero.js
import { useState, useEffect } from 'react';
import './Hero.css';
import heroBackOne from '../../assets/img/hero/hero-back-one.svg';
import heroBackTwo from '../../assets/img/hero/back-2.jpg';
import heroBackThree from '../../assets/img/hero/back-3.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
   const backgrounds = [heroBackOne, heroBackTwo, heroBackThree];
   const [currentBackground, setCurrentBackground] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
      }, 2500);
      return () => clearInterval(interval);
   }, []);

   return (
      <section className="hero">
         <div className="backgrounds">
            {backgrounds.map((bg, index) => (
               <div
                  key={index}
                  className={`background ${index === currentBackground ? 'visible' : ''}`}
                  style={{ backgroundImage: `url(${bg})` }}
               />
            ))}
         </div>
         <div className="dark"></div>
         <h1>
            Crafting the essence of
            Kazakh cuisine and tea culture.
         </h1>
         <p>
            The restaurant ‘Tary’ combines ancient recipes and modern culinary approaches,
            offering a unique culinary journey in the heart of Kazakhstan.
         </p>
         <button>
            <Link className="men-nav" to={'/menu'}>
               <span>View Menu</span>
            </Link>
         </button>
      </section>
   );
};

export default Hero;
