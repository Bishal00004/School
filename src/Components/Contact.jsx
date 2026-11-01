import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane, 
  FaCheckCircle
} from 'react-icons/fa';
import { assetUrl } from '../utils/assetUrl';
import '../stylesheet/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`;
    window.location.href = `mailto:info@kalikamanavgyan.edu.np?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      details: 'Kalika Manavgyan Secondary School, Kalikanagar, Butwal-10, Rupandehi, Nepal'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone Numbers',
      details: '+977-71-540000 / +977-71-540111',
      links: [
        { label: '+977-71-540000', href: 'tel:+97771540000' },
        { label: '+977-71-540111', href: 'tel:+97771540111' },
      ]
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      details: 'info@kalikamanavgyan.edu.np',
      href: 'mailto:info@kalikamanavgyan.edu.np'
    },
    {
      icon: <FaClock />,
      title: 'School Hours',
      details: 'Sun - Fri: 6:00 AM - 4:30 PM (Saturday Closed)'
    }
  ];

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero" style={{ '--hero-image': `url("${assetUrl('images/contact.jpg')}")` }}>
        <div className="contact-hero-content">
          <span className="badge-pill">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>
            Have questions regarding admissions, academic programs, or school activities? 
            Reach out to our administrative team or send us a message below.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="contact-body-section">
        <div className="contact-wrapper">
          {/* Quick Info Grid */}
          <div className="contact-info-grid">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.links ? info.links.map((link, index) => (
                  <React.Fragment key={link.href}>
                    {index > 0 && ' / '}<a href={link.href}>{link.label}</a>
                  </React.Fragment>
                )) : info.href ? <a href={info.href}>{info.details}</a> : info.details}</p>
              </div>
            ))}
          </div>

          {/* Form & Map Section */}
          <div className="contact-content-grid">
            {/* Form */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="success-box">
                  <FaCheckCircle className="success-icon" />
                  <h3>Email draft prepared</h3>
                  <p>
                    Thank you <strong>{formData.name}</strong>. Your email app should open with your message.
                    Review and send the draft to complete your inquiry.
                  </p>
                  <button 
                    className="btn-glow-primary" 
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below for general inquiries or support.</p>

                  <div className="input-group">
                    <label>Your Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="e.g. Bishal Thapa" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="input-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="example@gmail.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="input-group">
                    <label>Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder="Admission query, SEE routine, etc." 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="input-group">
                    <label>Message</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      placeholder="Write your query details here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit">
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map Preview Frame */}
            <div className="map-card">
              <h3>Find Us on Map</h3>
              <div className="map-frame-wrapper">
                <iframe
                  title="Kalika School Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9096238268685!2d83.4651372!3d27.6891632!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399686887532fa3d%3A0x6b801a613beaa510!2sKalika%20Manavgyan%20Secondary%20School!5e0!3m2!1sen!2snp!4v1680000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
