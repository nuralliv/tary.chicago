import './Menu.css'
import backOu from '../../assets/img/component-menu/image 32.svg'
import mealMenu1 from '../../assets/img/component-menu/special-menu1.png'
import mealMenu2 from '../../assets/img/component-menu/special-menu2.png'
import mealMenu3 from '../../assets/img/component-menu/special-menu3.png'
import mealMenu4 from '../../assets/img/component-menu/special-menu4.png'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {

   useEffect(() => {
      AOS.init({
         duration: 1200, // Длительность анимации в миллисекундах
      });
   }, []);
   return (
      <section className='menu'>
         <div className="menu-comp-top">
            <h2 data-aos="fade-up">Special Menu</h2>
            <p className='menu-tit' data-aos="fade-up" data-aos-delay="200">
               Discover the heart of our culinary artistry with our carefully curated Special Menu, designed to delight your senses and elevate your dining experience.            </p>
            
            <button className='menu-component-btn'>
               <Link to={'/tary.chicago/menu'} className='to-menu-page'>
                  view menu
               </Link>
            </button>
         </div>
         <div className="back-uzor">

            <div className="back-rec"></div>
            <div className="uzor-images">
               <img src={backOu} alt="" />
               <img src={backOu} id='ou-second' alt="" />
               <img src={backOu} id='ou-third' alt="" />

            </div>
         </div>
         <div className="menus" >
            <div data-aos="fade-down" data-aos-delay="400" className="special-meal" style={{
               backgroundImage: `url(${mealMenu1})`,
               marginTop: '100px',
            }}>
               <div className="meal-dark">
                  <div className="meal-content">
                     <h4 className="cost">$11.00</h4>
                     <h3 className='meal-name'>Tary Coffee – A Sip of Perfection</h3>
                     <p>Tary Coffee isn’t just a drink—it’s a moment of joy, crafted to bring people together. Inspired by the warmth and energy of a bustling mela (festival), each cup embodies the spirit of connection, celebration, and tradition.</p>
                  </div>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="special-meal" style={{
               backgroundImage: `url(${mealMenu2})`
            }}>
               <div className="meal-dark">
                  <div className="meal-content">
                     <h4 className="cost">$11.00</h4>
                     <h3 className='meal-name'>Tary Coffee – A Sip of Perfection</h3>
                     <p>Tary Coffee isn’t just a drink—it’s a moment of joy, crafted to bring people together. Inspired by the warmth and energy of a bustling mela (festival), each cup embodies the spirit of connection, celebration, and tradition.</p>
                  </div>
               </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="400" className="special-meal" style={{
               backgroundImage: `url(${mealMenu3})`,
               marginTop: '100px',

            }}>
               <div className="meal-dark">
                  <div className="meal-content">
                     <h4 className="cost">$11.00</h4>
                     <h3 className='meal-name'>Tary Coffee – A Sip of Perfection</h3>
                     <p>Tary Coffee isn’t just a drink—it’s a moment of joy, crafted to bring people together. Inspired by the warmth and energy of a bustling mela (festival), each cup embodies the spirit of connection, celebration, and tradition.</p>
                  </div>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="special-meal" style={{
               backgroundImage: `url(${mealMenu4})`
            }}>
               <div className="meal-dark">
                  <div className="meal-content">
                     <h4 className="cost">$11.00</h4>
                     <h3 className='meal-name'>Tary Coffee – A Sip of Perfection</h3>
                     <p>Tary Coffee isn’t just a drink—it’s a moment of joy, crafted to bring people together. Inspired by the warmth and energy of a bustling mela (festival), each cup embodies the spirit of connection, celebration, and tradition.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Menu