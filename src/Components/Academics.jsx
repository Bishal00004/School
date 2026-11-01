import React, { useState } from 'react';
import { 
  FaBookReader, 
  FaGraduationCap, 
  FaCheckCircle, 
  FaAward 
} from 'react-icons/fa';
import { assetUrl } from '../utils/assetUrl';
import '../stylesheet/Academics.css';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('plus2');

  const academicLevels = [
    { id: 'basic', name: 'Basic Level (Grades 1 - 8)', icon: <FaBookReader /> },
    { id: 'secondary', name: 'Secondary Level (Grades 9 - 10)', icon: <FaGraduationCap /> },
    { id: 'plus2', name: '+2 Programs (Grades 11 - 12)', icon: <FaAward /> }
  ];

  return (
    <div className="academics-container">
      {/* Header Banner */}
      <section className="academics-hero" style={{ '--hero-image': `url("${assetUrl('images/academis.jpg')}")` }}>
        <div className="academics-hero-content">
          <span className="badge-pill">Academic Structure</span>
          <h1>Curriculum Across All Classes</h1>
          <p>
            From foundational childhood learning to advanced higher secondary streams, 
            Kalika Manavgyan delivers world-class education designed for holistic growth.
          </p>
        </div>
      </section>

      {/* Interactive Level Switcher Tabs */}
      <section className="level-tabs-section">
        <div className="level-tabs-wrapper">
          {academicLevels.map((lvl) => (
            <button
              key={lvl.id}
              className={`level-tab-btn ${activeTab === lvl.id ? 'active' : ''}`}
              onClick={() => setActiveTab(lvl.id)}
              aria-pressed={activeTab === lvl.id}
            >
              <span className="tab-icon">{lvl.icon}</span>
              <span>{lvl.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Dynamic Tab Content Area */}
      <section className="academics-content-section">
        <div className="content-wrapper">
          
          {/* BASIC LEVEL (1 - 8) */}
          {activeTab === 'basic' && (
            <div className="tab-pane animate-fade">
              <div className="pane-header">
                <h2>Basic Level Education (Grades 1 to 8)</h2>
                <p>Building strong foundational literacy, numeracy, and cognitive curiosity through interactive and activity-based learning methods.</p>
              </div>

              <div className="info-grid">
                <div className="info-card">
                  <h3>Core Subjects</h3>
                  <ul className="custom-list">
                    <li><FaCheckCircle className="check-icon" /> Nepali, English & Mathematics</li>
                    <li><FaCheckCircle className="check-icon" /> Science & Environmental Studies</li>
                    <li><FaCheckCircle className="check-icon" /> Social Studies & Creative Arts</li>
                    <li><FaCheckCircle className="check-icon" /> Computer Literacy & Moral Education</li>
                  </ul>
                </div>
                <div className="info-card highlight-card">
                  <h3>Teaching Methodology</h3>
                  <p>We emphasize activity-driven learning, phonics development, experiential classroom projects, and interactive digital audio-visual aids to make foundational education engaging.</p>
                </div>
              </div>
            </div>
          )}

          {/* SECONDARY LEVEL (9 - 10) */}
          {activeTab === 'secondary' && (
            <div className="tab-pane animate-fade">
              <div className="pane-header">
                <h2>Secondary Level & SEE Preparation (Grades 9 to 10)</h2>
                <p>Rigorous academic preparation focusing on deep analytical skills, scientific experiments, mathematical reasoning, and complete SEE exam readiness.</p>
              </div>

              <div className="info-grid">
                <div className="info-card">
                  <h3>Core & Elective Curricula</h3>
                  <ul className="custom-list">
                    <li><FaCheckCircle className="check-icon" /> Compulsory Mathematics & Science</li>
                    <li><FaCheckCircle className="check-icon" /> Optional Mathematics / Computer Science</li>
                    <li><FaCheckCircle className="check-icon" /> English & Nepali Language Mastery</li>
                    <li><FaCheckCircle className="check-icon" /> Social Studies & Accountancy basics</li>
                  </ul>
                </div>
                <div className="info-card highlight-card">
                  <h3>Board Exam Support</h3>
                  <p>Includes weekly mock tests, model question paper problem-solving sessions, regular parent-teacher evaluations, and personalized remedial tutoring.</p>
                </div>
              </div>
            </div>
          )}

          {/* PLUS TWO (+2) PROGRAMS (11 - 12) */}
          {activeTab === 'plus2' && (
            <div className="tab-pane animate-fade">
              <div className="pane-header">
                <h2>Higher Secondary / +2 Programs (Grades 11 to 12)</h2>
                <p>Specialized streams geared towards higher education, professional readiness, entrepreneurship, and university entrance success.</p>
              </div>

              <div className="streams-comparison-grid">
                {/* Management Stream */}
                <div className="stream-detail-card">
                  <div className="card-top-tag management">Management Stream</div>
                  <h3>Faculty of Management</h3>
                  <p>Ideal for future business leaders, accountants, economists, and software entrepreneurs.</p>
                  
                  <div className="subject-list-title">Core & Optional Subjects:</div>
                  <ul className="custom-list">
                    <li><FaCheckCircle className="check-icon" /> Accountancy (Grade 11 & 12)</li>
                    <li><FaCheckCircle className="check-icon" /> Economics & Business Studies</li>
                    <li><FaCheckCircle className="check-icon" /> Computer Science / Marketing</li>
                    <li><FaCheckCircle className="check-icon" /> Compulsory English & Nepali</li>
                  </ul>
                </div>

                {/* Science Stream */}
                <div className="stream-detail-card">
                  <div className="card-top-tag science">Science Stream</div>
                  <h3>Faculty of Science</h3>
                  <p>Rigorous foundation for engineering, medical sciences, tech development, and pure sciences.</p>
                  
                  <div className="subject-list-title">Core & Optional Subjects:</div>
                  <ul className="custom-list">
                    <li><FaCheckCircle className="check-icon" /> Physics & Chemistry (With Lab Practice)</li>
                    <li><FaCheckCircle className="check-icon" /> Biology / Computer Science</li>
                    <li><FaCheckCircle className="check-icon" /> Grade 11 & 12 Mathematics</li>
                    <li><FaCheckCircle className="check-icon" /> Compulsory English & Nepali</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Academics;
