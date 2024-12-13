import BarList from '../../components/Meal-Menu/Bar-list';
import MealList from '../../components/Meal-Menu/Meal-list';
import './Menu.css';
import { useState, } from 'react';

const Menu = () => {
  const [type, setType] = useState('main'); // Тип активного элемента


  return (
    <section className="menu-page">
      <h1>Menu</h1>
      <div className="menu-tipes">
        <button
          onClick={() => setType('main')}
          className={type === 'main' ? 'type-active' : ''}
        >
          Main Dishes
        </button>
        <div className="ver-line-t"></div>
        <button
          onClick={() => setType('tea')}
          className={type === 'tea' ? 'type-active' : ''}
        >
          Tea & Coffee
        </button>
      </div>
      <div className={type === 'main' ? 'change-type-menu' : ''}>
        <BarList />
      </div>
      <div className={type === 'tea' ? 'change-type-menu' : ''}><MealList /></div>
    </section>
  );
};

export default Menu;
