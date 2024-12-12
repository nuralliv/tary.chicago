import './AboutUs.css'
import heroImg from '../../assets/img/About Us/hero.png'
import feat1 from '../../assets/img/About Us/feat1.png'
import feat2 from '../../assets/img/About Us/feat2.png'
import feat3 from '../../assets/img/About Us/feat3.png'


import oneImg from '../../assets/img/About Us/one-img.png'
import twoImg from '../../assets/img/About Us/two-img.png'
import threeImg from '../../assets/img/About Us/three-img.png'
import fourImg from '../../assets/img/About Us/four-img.png'
import fiveImg from '../../assets/img/About Us/five-img.png'
import sixImg from '../../assets/img/About Us/six-img.png'
import sevenImg from '../../assets/img/About Us/seven-img.png'
import eightImg from '../../assets/img/About Us/eight-img.png'
import nineImg from '../../assets/img/About Us/nine-img.png'
import tenImg from '../../assets/img/About Us/ten-img.png'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  console.log(window.location.href)
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
    });
  }, []);
  return (
    <section className='aboutus'>
      <h1>About Us</h1>
      <div className="aboutus-hero">
        <h2 data-aos="fade-right">TARY</h2>
        <div className="hero-content">
          <img data-aos="fade-right" src={heroImg} alt="" />
          <div data-aos="fade-left" className="hero-info">
            <h4>TARY is our unique identity.</h4>
            <hr />
            <p>Tary. rooted in Kazakh heritage. offers unique handcrafted teas and beverages made from golden millet, berries, regional herbs. and coffee alternatives.</p>
            <hr />
            <p>For every Kazakh, Tary holds a special place it&apos;s the taste of home, the warmth of family bonds. and the essence of tradition.</p>
            <hr id='insvis' />
          </div>
        </div>
      </div>
      <div className="tary-features">
        <h3 data-aos="fade-up">Visit  <span className='broown' style={{
          marginLeft: '5px'
        }}> Tary</span>, and...</h3>
        <div className="features-content">
          <div data-aos="fade-down" data-aos-delay="200" className="feature">
            <img src={feat1} alt="" />
            <p>Enjoy exceptional service from our friendly and dedicated team, always ready to make your visit unforgettable.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="feature feature-mid">
            <img src={feat2} alt="" />
            <p>Experience the perfect blend of quality and flavor with our thoughtfully prepared, delicious dishes.</p>
          </div>
          <div data-aos="fade-down" data-aos-delay="200" className="feature" id='feat-three'>
            <img src={feat3} alt="" />
            <p>Relax in our cozy atmosphere, where warm decor and inviting spaces make every visit feel like home.</p>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div data-aos="fade-right" className="row-one">
          <img src={oneImg} alt="" />
          <img src={twoImg} alt="" />
          <img src={threeImg} alt="" />
        </div>
        <div data-aos="fade-left" className="row-two">
          <img src={fourImg} alt="" />
          <img src={fiveImg} alt="" />
          <img src={sixImg} alt="" />
          <img src={sevenImg} alt="" />
        </div>
        <div data-aos="fade-right" className="row-one">
          <img src={eightImg} alt="" />
          <img src={nineImg} alt="" />
          <img src={tenImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs