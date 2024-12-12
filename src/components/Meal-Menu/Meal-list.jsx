import { useState, useEffect } from "react";
import axios from "axios";

const MealList = () => {
   const [foodData, setFoodData] = useState([]); // Все данные о еде
   const [filteredData, setFilteredData] = useState([]); // Отфильтрованные данные
   const [activeCategory, setActiveCategory] = useState(''); // Активная категория

   const SPREADSHEET_ID = '1sJp3A-ssEBB6ogctot2OCoA8UgRscd7HmI-JPuGqRc0'; // ID таблицы
   const RANGE = 'Sheet1'; // Имя листа или диапазон
   const API_KEY = 'AIzaSyCH62jcVLuLr9cOMq0UlkUunWtwqydOXZU'; // Ваш API ключ

   useEffect(() => {
      const fetchFoodData = async () => {
         try {
            const response = await axios.get(
               `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
            );

            const rows = response.data.values;

            // Преобразуем данные в объект с полями
            const formattedData = rows.slice(1).map((row) => ({
               name: row[0] || 'Unknown', // Проверка на пустое значение
               cost: row[2] || 'N/A',
               image: row[3] || '',
               category: row[4] || 'General',
               newStatus: row[5] === 'TRUE',
               ingredients: row[6] || 'No ingredients listed',
            }));

            setFoodData(formattedData);
            setFilteredData(formattedData); // По умолчанию отображаем все данные
         } catch (error) {
            console.error('Ошибка загрузки данных из Google Sheets:', error);
         }
      };

      fetchFoodData();
   }, []);

   const handleFilter = (category) => {
      setActiveCategory(category);
      if (category === '') {
         setFilteredData(foodData); // Если категория пустая, отображаем все данные
      } else {
         setFilteredData(foodData.filter((food) => food.category.toUpperCase() === category.toUpperCase())); // filter
      }
   };

   // Получаем уникальные категории
   const uniqueCategories = Array.from(new Set(foodData.map(food => food.category))).sort();

   return (
      <div className="menu-content">
         <div className="filters">
            <button
               onClick={() => handleFilter('')}
               className={activeCategory === '' ? 'filter-active' : ''}
            >
               All
            </button>
            {uniqueCategories.map((category, index) => (
               <button
                  key={index}
                  onClick={() => handleFilter(category)}
                  className={activeCategory === category ? 'filter-active' : ''}
               >
                  {category}
               </button>
            ))}
         </div>
         <div className="menu-list">
            {filteredData.map((food, index) => (
               <div className="food-card" key={index}>
                  <div className="new-status" id={!food.newStatus ? 'hideS' : ''}>New</div>
                  <img className="food-image" src={food.image} alt={food.name} />
                  <div className="food-card-right">
                     <div className="food-card-top">
                        <h5 className="food-title">{food.name}</h5>
                        <div className="food-cost">
                           $ {parseFloat(food.cost).toFixed(2)}
                        </div>
                     </div>
                     <div className="food-ingredients">{food.ingredients}</div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default MealList;
