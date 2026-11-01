import React from 'react';
import { assetUrl } from '../utils/assetUrl';
import { 
  FaBullseye, 
  FaEye, 
  FaCheckCircle 
} from 'react-icons/fa';
import '../stylesheet/About.css';

const About = () => {
  const milestones = [
    { year: '1985', title: 'School Establishment', desc: 'Started with humble beginnings as a community school in Butwal.' },
    { year: '2005', title: 'Secondary Expansion', desc: 'Introduced Grades 9 and 10 with enhanced science laboratory facilities.' },
    { year: '2015', title: '+2 Programs Launched', desc: 'Officially added Higher Secondary Management and Science streams.' },
    { year: '2026', title: 'Digital Transformation', desc: 'Fully integrated smart labs, digital portals, and modern e-learning ecosystems.' }
  ];

  const coreValues = [
    { title: 'Academic Rigor', desc: 'Commitment to highest standards of examination readiness and deep analytical learning.' },
    { title: 'Moral Integrity', desc: 'Instilling discipline, respect, ethical responsibility, and community values in every student.' },
    { title: 'Innovation & Tech', desc: 'Encouraging computer programming, modern software skills, and practical problem-solving.' },
    { title: 'Inclusive Growth', desc: 'Ensuring equal opportunity, scholarships, and personalized mentorship for all learners.' }
  ];

  return (
    <div className="about-container">
      {/* Hero Banner */}
      <section className="about-hero" style={{ '--hero-image': `url("${assetUrl('images/about.jpg')}")` }}>
        <div className="about-hero-content">
          <span className="badge-pill">Our Legacy</span>
          <h1>About Kalika Manavgyan</h1>
          <p>
            A premier educational institution in Butwal, Nepal, dedicated to fostering academic brilliance, 
            character building, and technological empowerment for over three decades.
          </p>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="principal-section">
        <div className="principal-wrapper">
          <div className="principal-card-glass">
            <div className="principal-img-box">
              <div className="principal-avatar-placeholder">
                <img src={assetUrl('images/principal.jpg')} alt="Principal of Kalika Manavgyan Secondary School" loading="lazy" />
              </div>
            </div>
            <div className="principal-text-content">
              <span className="sub-tag">Message from Leadership</span>
              <h2>Building the Future Leaders of Tomorrow</h2>
              <p className="quote-text">
                "At Kalika Manavgyan, we believe that education is not merely about memorizing textbooks—it is about
                sparking curiosity, building resilient habits, and equipping young minds with the practical skills 
                needed to thrive in a fast-evolving digital world."
              </p>
              <div className="principal-signature">
                <strong>School Leadership</strong>
                <span>Kalika Manavgyan Secondary School, Butwal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="vision-mission-section">
        <div className="vision-grid">
          <div className="vision-card">
            <div className="icon-box"><FaEye /></div>
            <h3>Our Vision</h3>
            <p>
              To be a leading center of educational excellence that empowers students with independent thinking, 
              technological literacy, and global competencies while staying deeply rooted in moral values.
            </p>
          </div>
          <div className="vision-card">
            <div className="icon-box"><FaBullseye /></div>
            <h3>Our Mission</h3>
            <p>
              To provide a dynamic, safe, and nurturing learning environment supported by expert educators, 
              state-of-the-art facilities, and experiential project-based curricula across all academic levels.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="milestones-section">
        <div className="section-header">
          <span className="sub-tag">Our History</span>
          <h2>Milestones of Excellence</h2>
          <p>Key moments that shaped our journey into one of Nepal's finest institutions.</p>
        </div>

        <div className="timeline-container">
          {milestones.map((m, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-content">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="values-section">
        <div className="values-wrapper">
          <div className="section-header">
            <span className="sub-tag">What Drives Us</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {coreValues.map((v, i) => (
              <div key={i} className="value-card">
                <FaCheckCircle className="check-icon" />
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
