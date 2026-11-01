import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { assetUrl } from '../utils/assetUrl';
import '../stylesheet/SiteFooter.css';

const footerLinks = [
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Notices & events', to: '/notice-events' },
  { label: 'About the school', to: '/about' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Contact', to: '/contact' },
];
const currentYear = new Date().getFullYear();

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-school">
        <img src={assetUrl('images/logo.jpg')} alt="Kalika Manavgyan school emblem" />
        <div>
          <strong>Kalika Manavgyan</strong>
          <span>Secondary School · Butwal, Nepal</span>
        </div>
      </div>
      <p className="footer-note">A place to learn, grow and find your own way forward.</p>
      <div className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((link) => <NavLink to={link.to} key={link.to}>{link.label}</NavLink>)}
      </div>
      <a
        className="footer-location"
        href="https://www.google.com/maps/search/?api=1&query=Kalika+Manavgyan+Secondary+School+Butwal"
        target="_blank"
        rel="noreferrer"
      >
        <FaMapMarkerAlt /> Kalikanagar, Butwal-10 <FaArrowRight />
      </a>
    </div>
    <div className="footer-bottom">
      <span>© {currentYear} Kalika Manavgyan Secondary School</span>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button>
    </div>
  </footer>
);

export default SiteFooter;
