import './About.css';
import backOuHor from '../../assets/img/component-about/back-ou-hor.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/img/component-about/image1.png';
import image2 from '../../assets/img/component-about/image2.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const About = () => {
   useEffect(() => {
      AOS.init({
         duration: 1200, // Длительность анимации в миллисекундах
      });
   }, []);

   return (
      <section className='about'>
         <img className='back-ou' src={backOuHor} alt="" />
         <div className="about-content">
            <div className="about-left">
               <h2 className='animate' data-aos="fade-up">About Us</h2>
               <p data-aos="fade-up" data-aos-delay="200">
                  <span>Welcome to <span className='broown'>Tary</span>, a unique coffee shop in Chicago that brings the essence of Kazakhstan to the city. </span>
                  <span id='midle'>Our space is thoughtfully designed with elegant Kazakh dishware, handcrafted wooden bowls, and cozy rugs, creating a <span className='broown'>warm</span> and <span className='broown'>inviting</span> atmosphere.</span>
                  <span>We’re dedicated to providing exceptional service and a memorable experience for every guest.</span>
               </p>
               <button data-aos="fade-up" data-aos-delay="400"><Link to={'/about'} className='men-nav'>Learn More</Link></button>
            </div>
            <div className="about-right">
               <img data-aos="fade-left" className='img-first' src={image1} alt="" />
               <img data-aos="fade-left" data-aos-delay="400" className='img-second' src={image2} alt="" />
            </div>
         </div>
      </section>
   );
};

export default About;
