import React, { useState } from 'react';
import { 
  FaLaptopCode, 
  FaFlask, 
  FaBookOpen, 
  FaVolleyballBall, 
  FaBus, 
  FaUtensils, 
  FaShieldAlt, 
  FaWifi,
  FaCheckCircle
} from 'react-icons/fa';
import { assetUrl } from '../utils/assetUrl';
import '../stylesheet/Facilities.css';

const Facilities = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const facilityCategories = [
    { id: 'all', name: 'All Facilities' },
    { id: 'academic', name: 'Academic & Labs' },
    { id: 'sports', name: 'Sports & Fitness' },
    { id: 'services', name: 'Campus Services' }
  ];

  const facilitiesList = [
    {
      id: 1,
      category: 'academic',
      title: 'Advanced Computer & IT Labs',
      icon: <FaLaptopCode />,
      highlight: 'High-Speed Web Stack Labs',
      description: 'Equipped with modern PCs, high-speed fiber internet, local servers, and specialized development environments for web development and programming coursework.'
    },
    {
      id: 2,
      category: 'academic',
      title: 'State-of-the-Art Science Labs',
      icon: <FaFlask />,
      highlight: 'Physics, Chem & Bio Labs',
      description: 'Separate, fully-outfitted practical experiment laboratories designed for high school science practicals, safety apparatus, and analytical experiments.'
    },
    {
      id: 3,
      category: 'academic',
      title: 'Digital & Physical Library',
      icon: <FaBookOpen />,
      highlight: '15,000+ Books & E-Resources',
      description: 'A quiet multi-story resource center offering reference textbooks, research journals, daily newspapers, and digital reading terminals for students.'
    },
    {
      id: 4,
      category: 'sports',
      title: 'Sports Complex & Main Ground',
      icon: <FaVolleyballBall />,
      highlight: 'Football, Cricket & Volleyball',
      description: 'Spacious outdoor grounds and court setups for regular physical training, intra-school leagues, cricket matches, and annual athletic meets.'
    },
    {
      id: 5,
      category: 'services',
      title: 'Safe School Transportation',
      icon: <FaBus />,
      highlight: 'Wide Route Coverage',
      description: 'A fleet of dedicated school buses providing safe, punctual, and comfortable daily transit across major routes in Butwal and surrounding regions.'
    },
    {
      id: 6,
      category: 'services',
      title: 'Hygienic Cafeteria',
      icon: <FaUtensils />,
      highlight: 'Nutritious Meal Service',
      description: 'Clean dining space offering fresh, healthy snacks, meals, and beverages prepared daily adhering to strict health and sanitation guidelines.'
    },
    {
      id: 7,
      category: 'services',
      title: '24/7 Security & CCTV',
      icon: <FaShieldAlt />,
      highlight: 'Secure Closed Campus',
      description: 'Round-the-clock security personnel, automated gate monitoring, and complete CCTV surveillance across all blocks for maximum safety.'
    },
    {
      id: 8,
      category: 'academic',
      title: 'High-Speed Campus Wi-Fi',
      icon: <FaWifi />,
      highlight: 'Smart E-Learning Access',
      description: 'Seamless wireless internet connectivity across IT labs, library terminals, and faculty lounges to support digital research.'
    }
  ];

  const filteredFacilities = activeCategory === 'all' 
    ? facilitiesList 
    : facilitiesList.filter(f => f.category === activeCategory);

  return (
    <div className="facilities-container">
      {/* Hero Banner */}
      <section className="facilities-hero" style={{ '--hero-image': `url("${assetUrl('images/facilities.jpg')}")` }}>
        <div className="facilities-hero-content">
          <span className="badge-pill">Campus Infrastructure</span>
          <h1>World-Class Facilities</h1>
          <p>
            Providing a modern, safe, and technology-driven environment designed 
            to inspire learning, innovation, and holistic development at Kalika Manavgyan.
          </p>
        </div>
      </section>

      {/* Main Facilities Section */}
      <section className="facilities-body-section">
        <div className="facilities-wrapper">

          {/* Category Filter Tabs */}
          <div className="category-filter-bar">
            {facilityCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Facilities Cards Grid */}
          <div className="facilities-grid">
            {filteredFacilities.map((item) => (
              <div key={item.id} className="facility-card">
                <div className="card-header-box">
                  <div className="facility-icon-wrap">{item.icon}</div>
                  <span className="feature-pill">{item.highlight}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-footer-check">
                  <FaCheckCircle className="check-icon" /> Available for all enrolled students
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Facilities;
