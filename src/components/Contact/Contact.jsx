import Map from '../map/Map'
import Maptwo from '../Maptwo/Maptwo'
import './Contact.css'
import timeIcon from '../../assets/img/component-contuct/time.svg'
import phoneIcon from '../../assets/img/component-contuct/phone.svg'
import emailIcon from '../../assets/img/component-contuct/email.svg'
import locationIcon from '../../assets/img/component-contuct/location.svg'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Длительность анимации в миллисекундах
    });
  }, []);
  return (
    <section className="contact" id='contact'>
      <div data-aos="fade-right" className="contact-content">
        <h2>CONTACT US</h2>
        <div className="info-all">
          <div className="info">
            <h5><img src={timeIcon} alt="" />Working hours:</h5>
            <p>Mon - Sun, 7:00 AM - 8:00 PM</p>
          </div>
          <div className="info">
            <h5><img src={phoneIcon} alt="" />Phone:</h5>
            <p>+17737719473</p>
          </div> <div className="info">
            <h5><img src={emailIcon} alt="" /> Email:</h5>
            <p>Mon - Sun, 7:00 AM - 8:00 PM</p>
          </div>
          <div className="info">
            <h5><img src={locationIcon} alt="" />Address:</h5>
            <p>111 W Illinois St, Chicago, IL 60654, United States</p>
          </div>
        </div>
        <div className="map-in">
          <Maptwo />

        </div>
      </div>
      <div className="main-map-card">
        <Map />
      </div>
    </section>
  )
}

export default Contact

