import './Footer.css'
import footerBack from '../../assets/img/footer/footer-back-1.png'
import tiktok from '../../assets/img/footer/tiktok.svg';
import insta from '../../assets/img/footer/Insta.svg';
import locationIcon from '../../assets/img/footer/location.svg'
import emailIcon from '../../assets/img/footer/email.svg';
import phoneIcon from '../../assets/img/footer/phone.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
   return (
      <footer style={{
         backgroundImage: `url(${footerBack})`,
      }}>
         <div className="footer-content">
            <div className="column column-one">
               <h3>About Us</h3>
               <p>Tary brings the warmth of Kazakh culture to Chicago, offering a cozy space filled with elegant decor and exceptional hospitality.</p>
               <div className="medias">
                  <div className="media" ><Link className='men-nav' to={'https://www.tiktok.com/@tary.coffee'}><img id='tiktok' src={tiktok} alt="" /></Link></div>
                  <div className="media" ><Link className='men-nav' to={'https://www.instagram.com/tary_us/?hl=en'}><img id='insta' src={insta} alt="" /></Link></div>

               </div>
            </div>
            <div className="column column-two">
               <h3>Explore</h3>
               <ul className="footer-nav">
                  <Link to={'/tary.chicago'} className='footer-nav-link'>Home</Link>
                  <Link to={'/tary.chicago/about'} className='footer-nav-link'>About Us</Link>
                  <Link to={'/tary.chicago/menu'} className='footer-nav-link'>Menu</Link>
               </ul>
            </div>
            <div className="column column-three">
               <h3>Contact Info</h3>
               <div className="footer-contacts">
                  <div><img src={emailIcon} alt="" /> tary.chicago@gmail.com</div>
                  <div><img src={phoneIcon} alt="" /> +17737719473</div>
                  <div><img src={locationIcon} alt="" /> 111 W Illinois St, Chicago, IL 60654,<br /> United States</div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer