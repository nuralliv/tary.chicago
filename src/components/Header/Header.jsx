import './Header.css';
import phoneIcon from '../../assets/img/header/phoneIcon.svg';
import taryLogo from '../../assets/img/header/taryLogo.svg';
import locationIcon from '../../assets/img/header/locationIcon.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
   const location = useLocation();
   const [open, setOpen] = useState(false);
   const [isScrolling, setIsScrolling] = useState(false);

   // Lock scrolling when sidebar is open
   useEffect(() => {
      if (open) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }
   }, [open]);

   // Smooth scroll to anchor links
   useEffect(() => {
      if (location.hash) {
         const section = document.querySelector(location.hash);
         if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
         }
      }
   }, [location.hash]);

   // Handle header visibility on scroll
   useEffect(() => {
      let lastScrollY = window.scrollY;
      const handleScroll = () => {
         if (window.scrollY > lastScrollY) {
            setIsScrolling(true);
         } else {
            setIsScrolling(false);
         }
         lastScrollY = window.scrollY;
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const isActive = (path) => (location.pathname === path ? 'active' : '');

   return (
      <>
         <header className={isScrolling ? 'scrolling' : ''}>
            <div className="header-top">
               <div className="phone-all">
                  <img src={phoneIcon} alt="" />
                  <div className="phone-text">+1 773-322-7315</div>
               </div>
               <div className="logo-img">
                  <Link to={'/tary.chicago'}><img src={taryLogo} alt="" /></Link>
               </div>
               <div className="location-all">
                  <div className="location-texts">
                     <div className="location-text">111 West Illinois Street,</div>
                     <div className="location-text">Chicago, Illinois 60654</div>
                  </div>
                  <img src={locationIcon} alt="" />
               </div>
            </div>
            <div className="header-bottom">
               <ul className="nav-links">
                  <Link className={`nav-link ${isActive('/')}`} to={'/'}>Home</Link>
                  <Link className={`nav-link ${isActive('/about')}`} to={'/about'}>About Us</Link>
                  <Link className={`nav-link ${isActive('/menu')}`} to={'/menu'}>Menu</Link>
                  <Link className={`nav-link ${isActive('/#contact')}`} to={'/#contact'}>Contact Us</Link>
               </ul>
            </div>
            <div className="header-mobile-content"><Link to={'/tary.chicago'}>
               <img src={taryLogo} alt="" className="logo-mobile" /></Link>
               <button onClick={() => setOpen(!open)}>
                  <span className="line"></span>
                  <span id="line-2" className="line"></span>
                  <span id="line-3" className="line"></span>
               </button>
            </div>
         </header>

         <div className="side-bar-all" id={open ? 'side-open' : ''}>
            <div className="side-bar">
               <div className="close-btn" onClick={() => setOpen(false)}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="30"
                     height="30"
                     viewBox="0 0 24 24"
                     style={{ fill: "rgba(0, 0, 0, 1)" }}
                  >
                     <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                  </svg>
               </div>
               <div className="side-logo">
                  <Link to={'/tary.chicago'}><img src={taryLogo} alt="" /></Link>
               </div>
               <ul className="side-nav-links">
                  <Link
                     className={`side-nav-link ${isActive('/')}`}
                     to={'/tary.chicago'}
                     onClick={() => setOpen(false)}
                  >
                     Home
                  </Link>
                  <Link
                     className={`side-nav-link ${isActive('/about')}`}
                     to={'/tary.chicago/about'}
                     onClick={() => setOpen(false)}
                  >
                     About Us
                  </Link>
                  <Link
                     className={`side-nav-link ${isActive('/menu')}`}
                     to={'/tary.chicago/menu'}
                     onClick={() => setOpen(false)}
                  >
                     Menu
                  </Link>
                  <Link
                     className={`side-nav-link ${isActive('/#contact')}`}
                     to={'/tary.chicago#contact'}
                     onClick={() => setOpen(false)}
                  >
                     Contact Us
                  </Link>
               </ul>
               <div className="side-bor-low">
                  <h3>Visit Us</h3>
                  <div className="side-visit-info">
                     <p>111 West Illinois Street, Chicago, Illinois 60654</p>
                     <p>Open : 8.00 am - 8.00pm</p>
                     <p>tary.chicago@gmail.com</p>
                  </div>
                  <div className="separator"></div>
                  <div className="booking-all">
                     <h5>Booking Request</h5>
                     <div className="number">+1 773-322-7315</div>
                  </div>
               </div>
            </div>
            <div onClick={() => setOpen(false)} className="side-bar-close-invis"></div>
         </div>
      </>
   );
};

export default Header;
