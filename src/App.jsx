import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './pages/About Us/AboutUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './pages/Menu/Menu';
import { useState, } from 'react';
import ScrollToTop from './components/ScrollTop/ScrollTop';

function App() {
  const [menu, setMenu] = useState('home-nav'); // Общее состояние меню


  return (

    <>
      <ScrollToTop />
      <Header menu={menu} setMenu={setMenu} />
      <Routes>
        <Route path='/tary.chicago' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;