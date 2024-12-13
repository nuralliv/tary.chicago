import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './pages/About Us/AboutUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './pages/Menu/Menu';
import { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollTop/ScrollTop';
import Loader from './components/Loader/Loader';

function App() {
  const [menu, setMenu] = useState('home-nav');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const resourcesToLoad = [
      new Promise((resolve) => {
        const img = new Image();
        img.src = '/path/to/image.jpg'; // Замените на реальный путь
        img.onload = resolve;
      }),
      fetch('/path/to/data.json') // Замените на реальный API
        .then((response) => response.json())
        .then(() => Promise.resolve()),
    ];

    Promise.all(resourcesToLoad)
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error('Ошибка загрузки ресурсов:', error);
        setIsLoading(false); // В любом случае прячем загрузчик
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToTop />
      <Header menu={menu} setMenu={setMenu} />
      <Routes>
        <Route path='/tary.chicago' element={<Home />} />
        <Route path='/tary.chicago/about' element={<AboutUs />} />
        <Route path='/tary.chicago/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
