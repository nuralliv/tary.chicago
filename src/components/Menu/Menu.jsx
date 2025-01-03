import './Menu.css';
import backOu from '../../assets/img/component-menu/image 32.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
   const [menuData, setMenuData] = useState([]); // Данные из API

   useEffect(() => {
      AOS.init({
         duration: 1200,
      });

      // Функция загрузки данных из Google Sheets
      const fetchMenuData = async () => {
         const SPREADSHEET_ID = '1sJp3A-ssEBB6ogctot2OCoA8UgRscd7HmI-JPuGqRc0'; // ID таблицы
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
   }, []);

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
         <div className="menus">
            {menuData.map((meal, index) => (
               <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                  data-aos-delay="400"
                  className="special-meal"
                  style={{
                     backgroundImage: `url(${meal.image})`,
                     marginTop: index % 2 === 0 ? '50px' : '0',
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
      </section>
   );
};

export default Menu;
