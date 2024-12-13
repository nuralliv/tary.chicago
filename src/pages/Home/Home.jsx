import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Hero from '../../components/Hero/Hero'
import Menu from '../../components/Menu/Menu'
import { useState , useEffect } from 'react'
import Loader from '../../components/Loader/Loader'
import './Home.css'
const Home = () => {
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
         <Hero />
         <About />
         <Menu />
         <Contact />
      </>
   )
}

export default Home