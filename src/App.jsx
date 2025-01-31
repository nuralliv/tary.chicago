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
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Tary Chicago website </title>
        <meta name="description" content="Welcome to Tary Restaurant, a unique blend of exquisite cuisine and cozy ambiance in the heart of Chicago. We offer signature dishes inspired by global culinary traditions, focusing on fresh ingredients and exceptional flavors. Enjoy a gastronomic journey at Tary — where culinary artistry meets warm hospitality." />
        <meta name="keywords" content="Tary, Chicago, Restourant, Tary website github " />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ScrollToTop />
      <Header menu={menu} setMenu={setMenu} />
      <Routes>
        <Route path='/tary.chicago/' element={<Home />} />
        <Route path='/tary.chicago/about' element={<AboutUs />} />
        <Route path='/tary.chicago/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
