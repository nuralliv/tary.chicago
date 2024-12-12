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
                  <Link to={'/'}><img src={taryLogo} alt="" /></Link>
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
                  <Link className={`nav-link ${isActive('/tary.chicago#contact')}`} to={'/#contact'}>Contact Us</Link>
               </ul>
            </div>
            <div className="header-mobile-content">
               <img src={taryLogo} alt="" className="logo-mobile" />
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
                     style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
                  >
                     <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
                     <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8-8-8 3.589-8 8 3.589-8 8-8z"></path>
                  </svg>
               </div>
               <div className="side-logo">
                  <img src={taryLogo} alt="" />
               </div>
               <ul className="side-nav-links">
                  <Link
                     className={`side-nav-link ${isActive('/')}`}
                     to={'/'}
                     onClick={() => setOpen(false)}
                  >
                     Home
                  </Link>
                  <Link
                     className={`side-nav-link ${isActive('/about')}`}
                     to={'/about'}
                     onClick={() => setOpen(false)}
                  >
                     About Us
                  </Link>
                  <Link
                     className={`side-nav-link ${isActive('/menu')}`}
                     to={'/menu'}
                     onClick={() => setOpen(false)}
                  >
                     Menu
                  </Link>
                  <Link
                     className={`side-nav-link ${isActive('/tary.chicago#contact')}`}
                     to={'/#contact'}
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
