import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaArrowRight,
  FaAward,
  FaBullhorn,
  FaChartLine,
  FaGraduationCap,
  FaLaptopCode,
  FaTimes,
  FaUsers,
} from 'react-icons/fa';
import { assetUrl } from '../utils/assetUrl';
import '../stylesheet/Home.css';

const campusPhotos = [
  {
    src: assetUrl('images/notice.webp'),
    alt: 'Students gather on the school grounds for a campus celebration',
    title: 'Together on campus',
  },
  {
    src: assetUrl('images/alsonotice.webp'),
    alt: 'School community members celebrate a student achievement',
    title: 'Celebrating achievement',
  },
  {
    src: assetUrl('images/academis.jpg'),
    alt: 'Students take part in a classroom activity',
    title: 'Learning in action',
  },
];

const Home = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    if (!activePhoto) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActivePhoto(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [activePhoto]);

  const highlights = [
    { title: 'Basic to +2', detail: 'Learning through every stage', icon: <FaUsers /> },
    { title: 'Science & Management', detail: 'Two pathways for what comes next', icon: <FaChartLine /> },
    { title: 'Learning by doing', detail: 'Classroom, campus and community', icon: <FaAward /> },
  ];

  const streams = [
    {
      title: 'Management',
      desc: 'Explore business, economics, accountancy and technology through practical, future-focused study.',
      icon: <FaChartLine />,
      badge: 'Grades 11–12',
    },
    {
      title: 'Science & Technology',
      desc: 'Build a strong foundation in scientific thinking, laboratory learning and computing.',
      icon: <FaLaptopCode />,
      badge: 'Grades 11–12',
    },
  ];

  const recentNotices = [
    { id: 1, date: 'Nov 02', tag: 'Exam', title: 'Terminal Examination Routine for Grade 11 and 12 Published' },
    { id: 2, date: 'Oct 28', tag: 'Admissions', title: 'Scholarship Applications Open for Management & Science Students' },
    { id: 3, date: 'Oct 25', tag: 'Event', title: 'Annual Inter-House Sports Meet & Exhibition' },
  ];

  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-kicker"><span className="pulse-dot" /> A school community in Butwal</span>
          <h1>Room to learn.<br /><em>Space to become.</em></h1>
          <p>
            At Kalika Manavgyan, strong foundations meet curious minds. Discover a welcoming
            school community where learning grows from the classroom to the wider world.
          </p>
          <div className="hero-actions">
            <NavLink to="/admissions" className="btn-glow">Explore admissions <FaArrowRight /></NavLink>
            <NavLink to="/about" className="text-link">Get to know our school <FaArrowRight /></NavLink>
          </div>
          <div className="home-hero-note"><FaGraduationCap /> Basic, secondary and +2 learning in Butwal</div>
        </div>

        <figure className="home-hero-photo">
          <img src={assetUrl('images/ForHome.jpg')} alt="Kalika Manavgyan school campus in Butwal" fetchPriority="high" />
          <figcaption><span>Our school</span><strong>Kalikanagar, Butwal</strong></figcaption>
          <span className="photo-index">01 / 03</span>
        </figure>
        <span className="hero-ornament" aria-hidden="true">K</span>
      </section>

      <section className="home-highlights" aria-label="School highlights">
        {highlights.map((item) => (
          <article className="highlight-item" key={item.title}>
            <span className="highlight-icon" aria-hidden="true">{item.icon}</span>
            <div><h2>{item.title}</h2><p>{item.detail}</p></div>
          </article>
        ))}
      </section>

      <section className="streams-section home-section">
        <div className="section-heading home-section-heading">
          <div><span className="sub-heading">Find your direction</span><h2>Learning for what comes next</h2></div>
          <p>Choose a pathway that builds knowledge, confidence and room to explore.</p>
        </div>
        <div className="streams-grid">
          {streams.map((stream) => (
            <article key={stream.title} className="stream-card">
              <div className="stream-top"><span className="stream-icon">{stream.icon}</span><span className="stream-badge">{stream.badge}</span></div>
              <h3>{stream.title}</h3>
              <p>{stream.desc}</p>
              <NavLink to="/academics" className="stream-link">Explore academics <FaArrowRight /></NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="campus-story home-section">
        <div className="campus-story-copy">
          <span className="sub-heading">A glimpse of school life</span>
          <h2>More than a place to study.</h2>
          <p>
            Friendships, shared celebrations and everyday discoveries make a school day memorable.
            Take a look around the Kalika community.
          </p>
          <NavLink to="/facilities" className="stream-link">Explore the campus <FaArrowRight /></NavLink>
        </div>
        <div className="campus-film-frame">
          <video controls preload="metadata" poster={assetUrl('images/ForHome.jpg')} aria-label="A short video of Kalika Manavgyan school life">
            <source src={assetUrl('video/webvideo.mp4')} type="video/mp4" />
            Your browser does not support embedded videos.
          </video>
          <div className="film-caption"><span>Campus film</span><span>Kalika Manavgyan · Butwal</span></div>
        </div>
      </section>

      <section className="campus-gallery home-section" aria-labelledby="gallery-title">
        <div className="section-heading home-section-heading">
          <div><span className="sub-heading">Little moments, shared</span><h2 id="gallery-title">Life at Kalika</h2></div>
          <p>Select a photograph to see it up close.</p>
        </div>
        <div className="gallery-grid">
          {campusPhotos.map((photo, index) => (
            <button
              type="button"
              className={`gallery-photo gallery-photo-${index + 1}`}
              key={photo.src}
              onClick={() => setActivePhoto(photo)}
              aria-label={`Open photo: ${photo.title}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span>{photo.title}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="notices-showcase">
        <div className="notices-wrapper">
          <div className="notices-header">
            <div className="title-group"><FaBullhorn className="bell-icon" /><div><span className="sub-heading">From the school</span><h2>Latest notices</h2><p>Announcements and events for students and families.</p></div></div>
            <NavLink to="/notice-events" className="view-all-btn">All notices <FaArrowRight /></NavLink>
          </div>
          <div className="notices-stack">
            {recentNotices.map((notice) => (
              <NavLink to="/notice-events" key={notice.id} className="notice-row">
                <div className="notice-meta"><span className={`tag ${notice.tag.toLowerCase()}`}>{notice.tag}</span><span className="date">{notice.date}</span></div>
                <p className="notice-title-text">{notice.title}</p><FaArrowRight className="read-more-arrow" />
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {activePhoto && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={activePhoto.title} onClick={() => setActivePhoto(null)}>
          <button type="button" className="lightbox-close" onClick={() => setActivePhoto(null)} aria-label="Close photo"><FaTimes /></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <figcaption>{activePhoto.title}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default Home;
