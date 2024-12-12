import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Hero from '../../components/Hero/Hero'
import Menu from '../../components/Menu/Menu'
import './Home.css'
const Home = () => {
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