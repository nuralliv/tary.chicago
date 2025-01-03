import './Menu.css';
import backOu from '../../assets/img/component-menu/image 32.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
   const [menuData, setMenuData] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isMobile, setIsMobile] = useState(window.innerWidth < 431);

   useEffect(() => {
      AOS.init({
         duration: 1200,
      });

      const fetchMenuData = async () => {
         const SPREADSHEET_ID = '1sJp3A-ssEBB6ogctot2OCoA8UgRscd7HmI-JPuGqRc0';
         const RANGE = 'Signature';
         const API_KEY = 'AIzaSyCH62jcVLuLr9cOMq0UlkUunWtwqydOXZU';

         try {
            const response = await axios.get(
               `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
            );

            const rows = response.data.values;
            const formattedData = rows.slice(2).map((row) => ({
               name: row[0] || 'Unknown',
               cost: row[2] || 'N/A',
               image: row[3] || '',
               description: row[4] || 'No description available',
            }));

            setMenuData(formattedData);
         } catch (error) {
            console.error('Ошибка загрузки данных из Google Sheets:', error);
         }
      };

      fetchMenuData();

      const handleResize = () => {
         setIsMobile(window.innerWidth < 431);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
      if (isMobile) {
         const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % menuData.length);
         }, 5000);

         return () => clearInterval(interval);
      }
   }, [isMobile, menuData]);

   return (
      <section className='menu'>
         <div className="menu-comp-top">
            <h2 data-aos="fade-up">Special Menu</h2>
            <p className='menu-tit' data-aos="fade-up" data-aos-delay="200">
               Discover the heart of our culinary artistry with our carefully curated Special Menu, designed to delight your senses and elevate your dining experience.
            </p>
            <button className='menu-component-btn'>
               <Link to={'/tary.chicago/menu'} className='to-menu-page'>
                  View Menu
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
         <div className={`menus ${isMobile ? 'mobile-slider' : ''}`}>
            {menuData.map((meal, index) => (
               <div
                  key={index}
                  className={`special-meal ${isMobile && index === currentSlide ? 'active' : ''
                     }`}
                  style={{
                     backgroundImage: `url(${meal.image})`,
                     display: isMobile && index !== currentSlide ? 'none' : 'block',
                  }}
               >
                  <div className="meal-dark">
                     <div className="meal-content">
                        <h3 className='meal-name'>{meal.name}</h3>
                        <p>{meal.description}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         {isMobile && (
            <div className="slider-controls">
               <button onClick={() => setCurrentSlide((currentSlide - 1 + menuData.length) % menuData.length)}>
<svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" style={{fill: 'white', transform: '', msfilter: ''}}><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" /></svg>
                              </button>
               <button onClick={() => setCurrentSlide((currentSlide + 1) % menuData.length)}>
<svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" style={{fill: 'white', transform: '', msfilter: ''}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" /></svg>
                            </button>
            </div>
         )}
      </section>
   );
};

export default Menu;
