import './Menu.css'
import backOu from '../../assets/img/component-menu/image 32.svg'
import mealMenu from '../../assets/img/component-menu/meal-menu.png'
import drinkMenu from '../../assets/img/component-menu/drink-menu.png'
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
         <h2 data-aos="fade-up">Menu</h2>
         <p data-aos="fade-up" data-aos-delay="200">Explore our menu, featuring a blend of traditional and modern favorites inspired by Kazakh culture. From rich coffees to homemade baked goods and hearty meals, there&apos;s something for everyone to enjoy.</p>

         <div className="back-uzor">
            <div className="uzor-images">
               <img src={backOu} alt="" />
               <img src={backOu} id='ou-second' alt="" />
               <img src={backOu} id='ou-third' alt="" />

            </div>
            <div className="back-rec"></div>
         </div>
         <div className="menus" data-aos="fade-up" data-aos-delay="400">
            <div className="menu-min">
               <img src={mealMenu} alt="" />
               <div className="ver-line"></div>
               <button><Link className='men-nav' to={'/tary.chicago/menu'}>Main menu</Link></button>
            </div>
            <div className='menu-min'
            ><img src={drinkMenu} alt="" />
               <div className="ver-line"></div>
               <button><Link className='men-nav' to={'/tary.chicago/menu'}>Tea & Coffee</Link></button>
            </div>

         </div>
      </section>
   )
}

export default Menu