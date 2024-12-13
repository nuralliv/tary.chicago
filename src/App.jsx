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
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (isLoading) {
    return <Loader />; // Показываем загрузчик до завершения загрузки
  }

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
