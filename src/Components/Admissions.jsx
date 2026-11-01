import React, { useState } from 'react';
import { 
  FaUserPlus, 
  FaCheckCircle, 
  FaGraduationCap, 
  FaPaperPlane, 
  FaPhoneAlt, 
  FaEnvelope 
} from 'react-icons/fa';
import { assetUrl } from '../utils/assetUrl';
import '../stylesheet/Admissions.css';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    email: '',
    phone: '',
    stream: 'Management (+2)',
    previousGrade: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Admission inquiry — ${formData.studentName}`;
    const body = [
      `Student: ${formData.studentName}`,
      `Guardian: ${formData.guardianName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Program: ${formData.stream}`,
      `Previous school / notes: ${formData.message || 'Not provided'}`,
    ].join('\n');
    window.location.href = `mailto:admissions@kalikamanavgyan.edu.np?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const admissionSteps = [
    { step: '01', title: 'Online Application', desc: 'Fill out the digital inquiry form below with your academic details.' },
    { step: '02', title: 'Document Review', desc: 'Our admissions committee reviews past grade sheets and recommendations.' },
    { step: '03', title: 'Counseling & Test', desc: 'Brief interaction session and entrance aptitude test for your chosen stream.' },
    { step: '04', title: 'Final Enrollment', desc: 'Secure admission, select optional subjects, and official registration.' }
  ];

  return (
    <div className="admissions-container">
      {/* Hero Banner */}
      <section className="admissions-hero" style={{ '--hero-image': `url("${assetUrl('images/admmission.jpg')}")` }}>
        <div className="hero-glow-banner"></div>
        <div className="admissions-hero-content">
          <span className="badge-pill pulse-badge">Admissions Open 2026/27</span>
          <h1>Begin Your Journey at Kalika Manavgyan</h1>
          <p>
            Join a legacy of academic brilliance, cutting-edge technology facilities, 
            and a vibrant community of future leaders in Butwal.
          </p>
          <div className="hero-cta-group">
            <a href="#apply-form" className="btn-glow-primary">
              <FaUserPlus /> Apply Online Now
            </a>
            <a href="#prospectus" className="btn-glass-secondary">
              <FaGraduationCap /> View programs
            </a>
          </div>
        </div>
      </section>

      {/* Admission Roadmap Steps */}
      <section className="roadmap-section">
        <div className="section-title-box">
          <span className="sub-tag">Simple Process</span>
          <h2>How to Enroll</h2>
          <p>Your 4-step pathway to becoming part of Kalika Manavgyan Secondary School.</p>
        </div>

        <div className="roadmap-grid">
          {admissionSteps.map((item, index) => (
            <div key={index} className="roadmap-card">
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Streams & Eligibility Quick Banner */}
      <section className="eligibility-section" id="prospectus">
        <div className="eligibility-banner-box">
          <div className="eligibility-info">
            <FaGraduationCap className="banner-icon" />
            <div>
              <h3>Available Programs & Criteria</h3>
              <p>Admissions open for Basic Level, SEE Secondary (Grades 9-10), and +2 Management & Science Streams.</p>
            </div>
          </div>
          <div className="eligibility-action">
            <span className="status-pill open">Seats Available</span>
          </div>
        </div>
      </section>

      {/* Interactive Application Form Section */}
      <section className="form-section" id="apply-form">
        <div className="form-wrapper">
          <div className="form-intro">
            <h2>Online Admission Inquiry</h2>
            <p>
              Fill in your details to prepare an email inquiry for the admissions office. You can review it
              in your email app before sending.
            </p>

            <div className="contact-help-box">
              <div className="help-item">
                <FaPhoneAlt className="help-icon" />
                <div>
                  <span>Admissions Helpline</span>
                  <strong><a href="tel:+97771540000">+977-71-540000</a> / <a href="tel:+97771540111">540111</a></strong>
                </div>
              </div>
              <div className="help-item">
                <FaEnvelope className="help-icon" />
                <div>
                  <span>Official Email</span>
                  <strong><a href="mailto:admissions@kalikamanavgyan.edu.np">admissions@kalikamanavgyan.edu.np</a></strong>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card-container">
            {submitted ? (
              <div className="success-message-box animate-fade">
                <FaCheckCircle className="success-icon" />
                <h3>Email inquiry prepared</h3>
                <p>
                  Thank you, <strong>{formData.studentName}</strong>. Your email app should open with your details.
                  Review and send the draft to complete your inquiry.
                </p>
                <button 
                  className="btn-glow-primary reset-btn" 
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="admission-form">
                <h3>Application Form</h3>
                
                <div className="input-group">
                  <label>Full Name of Student</label>
                  <input 
                    type="text" 
                    name="studentName" 
                    placeholder="e.g. Bishal Thapa" 
                    value={formData.studentName}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label>Guardian's Name</label>
                    <input 
                      type="text" 
                      name="guardianName" 
                      placeholder="Parent/Guardian Name" 
                      value={formData.guardianName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="98XXXXXXXX" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="student@gmail.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <label>Target Stream / Level</label>
                    <select 
                      name="stream" 
                      value={formData.stream} 
                      onChange={handleChange}
                    >
                      <option value="Basic Level (Grades 1-8)">Basic Level (Grades 1-8)</option>
                      <option value="Secondary Level (Grades 9-10)">Secondary Level (Grades 9-10)</option>
                      <option value="Management (+2)">Management Stream (+2)</option>
                      <option value="Science (+2)">Science Stream (+2)</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label>Previous School / GPA / Remarks</label>
                  <textarea 
                    name="message" 
                    rows="3" 
                    placeholder="Mention your previous school name and GPA/grades if applicable..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  <FaPaperPlane /> Submit Application Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
