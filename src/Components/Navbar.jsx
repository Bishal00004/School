import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaBook, 
  FaUserPlus, 
  FaBullhorn, 
  FaInfoCircle, 
  FaBuilding, 
  FaPhoneAlt, 
  FaBars, 
  FaTimes 
} from 'react-icons/fa';
import { assetUrl } from '../utils/assetUrl';
import '../stylesheet/Navbar.css';

const ModernNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle background effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Academics', path: '/academics', icon: <FaBook /> },
    { name: 'Admissions', path: '/admissions', icon: <FaUserPlus />, badge: 'Open' },
    { name: 'Notice & Events', path: '/notice-events', icon: <FaBullhorn /> },
    { name: 'About Us', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Facilities', path: '/facilities', icon: <FaBuilding /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo & Name */}
        <NavLink to="/" className="navbar-brand" aria-label="Kalika Manavgyan Secondary School home">
          <div className="brand-logo-icon"><img src={assetUrl('images/logo.jpg')} alt="" /></div>
          <div className="brand-text">
            <span className="brand-title">Kalika Manavgyan</span>
            <span className="brand-subtitle">Secondary School · Butwal</span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links-desktop" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'nav-item-active' : ''}`
              }
            >
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-label">{link.name}</span>
              {link.badge && <span className="nav-badge">{link.badge}</span>}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="navbar-actions">
          <NavLink to="/admissions" className="btn-portal">
            Apply Now
          </NavLink>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle-btn" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div id="mobile-navigation" className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} aria-hidden={!isMobileMenuOpen} inert={!isMobileMenuOpen}>
        <nav className="mobile-nav-list" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                `mobile-nav-item ${isActive ? 'mobile-nav-item-active' : ''}`
              }
            >
              <span className="mobile-nav-icon">{link.icon}</span>
              <span className="mobile-nav-label">{link.name}</span>
              {link.badge && <span className="nav-badge">{link.badge}</span>}
            </NavLink>
          ))}
          <NavLink to="/admissions" className="mobile-btn-portal" onClick={() => setIsMobileMenuOpen(false)}>
            Apply Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default ModernNavbar;
