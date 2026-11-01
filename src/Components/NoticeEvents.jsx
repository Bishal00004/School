import React, { useEffect, useState } from 'react';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaSearch, 
  FaFileAlt, 
  FaExclamationCircle,
  FaTimes,
  FaShareAlt,
} from 'react-icons/fa';
import { assetUrl } from '../utils/assetUrl';
import '../stylesheet/NticeoEvents.css';

const NoticeEvents = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [copiedNoticeId, setCopiedNoticeId] = useState(null);

  const noticesData = [
    {
      id: 1,
      type: 'notice',
      category: 'Exam',
      title: 'First Terminal Examination 2083 Routine & Guidelines',
      date: 'Nov 02, 2026',
      urgent: true,
      image: assetUrl('images/academis.jpg'),
      imageAlt: 'Students taking part in a classroom lesson',
      description: 'The routine for the First Terminal Examination for Grades 11 and 12 (Management & Science) has been published. All students must bring their admit cards.'
    },
    {
      id: 2,
      type: 'event',
      category: 'Sports',
      title: 'Annual Inter-House Football & Cricket Tournament 2026',
      date: 'Nov 12 - Nov 15, 2026',
      time: '10:00 AM Onwards',
      location: 'School Main Ground, Butwal',
      urgent: false,
      image: assetUrl('images/notice.webp'),
      imageAlt: 'Students gather on the school grounds for a sports celebration',
      description: 'Inter-house matches for Senior Management and Science streams. Registration closes on Nov 08.'
    },
    {
      id: 3,
      type: 'notice',
      category: 'Admissions',
      title: 'Merit-Based Scholarship Result for Class 11 Entrants',
      date: 'Oct 28, 2026',
      urgent: false,
      image: assetUrl('images/alsonotice.webp'),
      imageAlt: 'School community members celebrate student achievement',
      description: 'List of students awarded full and partial tuition fee waivers based on the recent entrance examination and SEE GPA.'
    },
    {
      id: 4,
      type: 'event',
      category: 'Academic',
      title: 'Web Development & IT Career Orientation Workshop',
      date: 'Nov 20, 2026',
      time: '11:30 AM - 02:30 PM',
      location: 'Computer Lab 2 (IT Block)',
      urgent: false,
      image: assetUrl('images/facilities.jpg'),
      imageAlt: 'Students and teacher working together in a classroom',
      description: 'Special guest session for Computer Science students covering modern software stacks, SaaS building, and career paths.'
    },
    {
      id: 5,
      type: 'notice',
      category: 'General',
      title: 'Parents-Teacher Meeting (PTM) for Grade 12 Students',
      date: 'Oct 20, 2026',
      urgent: false,
      image: assetUrl('images/contact.jpg'),
      imageAlt: 'A school community gathering in the hall',
      description: 'Mandatory PTM to discuss terminal exam performance and attendance requirements.'
    }
  ];

  useEffect(() => {
    if (!selectedNotice) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedNotice(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedNotice]);

  const shareNotice = async (item) => {
    const details = `${item.title}\n${item.date}\n${item.description}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: item.title, text: details });
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(details);
      setCopiedNoticeId(item.id);
      window.setTimeout(() => setCopiedNoticeId(null), 2200);
    } catch {
      window.prompt('Copy the notice details:', details);
    }
  };

  const filteredItems = noticesData.filter((item) => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const searchableText = `${item.title} ${item.category} ${item.description}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="notice-container">
      {/* Hero Section */}
      <section className="notice-hero" style={{ '--hero-image': `url("${assetUrl('images/notice.webp')}")` }}>
        <div className="notice-hero-content">
          <span className="badge-pill">Stay Updated</span>
          <h1>Notices & School Events</h1>
          <p>
            Official announcements, examination schedules, upcoming campus sports, 
            and academic events for students, parents, and faculty.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="notice-body-section">
        <div className="notice-wrapper">
          
          {/* Controls Bar: Tabs & Search */}
          <div className="controls-bar">
            <div className="tab-filters" role="group" aria-label="Filter notices and events">
              <button 
                className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
                aria-pressed={activeTab === 'all'}
              >
                All Feed
              </button>
              <button 
                className={`filter-btn ${activeTab === 'notice' ? 'active' : ''}`}
                onClick={() => setActiveTab('notice')}
                aria-pressed={activeTab === 'notice'}
              >
                Notices
              </button>
              <button 
                className={`filter-btn ${activeTab === 'event' ? 'active' : ''}`}
                onClick={() => setActiveTab('event')}
                aria-pressed={activeTab === 'event'}
              >
                Upcoming Events
              </button>
            </div>

            <div className="search-box">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search notice or event..." 
                aria-label="Search notice or event"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* List Display */}
          <div className="items-list-grid">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`feed-card ${item.urgent ? 'urgent-card' : ''}`}
                >
                  <img className="feed-card-media" src={item.image} alt={item.imageAlt} loading="lazy" />
                  <div className="feed-card-content">
                  <div className="card-top-info">
                    <span className={`category-tag ${item.category.toLowerCase()}`}>
                      {item.category}
                    </span>
                    {item.urgent && (
                      <span className="urgent-badge">
                        <FaExclamationCircle /> Urgent
                      </span>
                    )}
                    <span className="date-stamp">
                      <FaCalendarAlt /> {item.date}
                    </span>
                  </div>

                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>

                  {/* Specific Event Metadata */}
                  {item.type === 'event' && (
                    <div className="event-meta-box">
                      <span><FaClock /> {item.time}</span>
                      <span><FaMapMarkerAlt /> {item.location}</span>
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="card-footer-actions">
                    <button 
                      className="btn-details"
                      onClick={() => setSelectedNotice(item)}
                    >
                      <FaFileAlt /> View Details
                    </button>

                    {item.type === 'notice' && (
                      <button className="btn-download" onClick={() => shareNotice(item)}>
                        <FaShareAlt /> {copiedNoticeId === item.id ? 'Copied details' : 'Share'}
                      </button>
                    )}
                  </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results-box">
                <p>No matching notices or events found.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Detail Modal */}
      {selectedNotice && (
        <div className="modal-overlay" onClick={() => setSelectedNotice(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="notice-modal-title" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedNotice(null)} aria-label="Close notice details">
              <FaTimes />
            </button>
            <span className="category-tag">{selectedNotice.category}</span>
            <h2 id="notice-modal-title">{selectedNotice.title}</h2>
            <div className="modal-meta">
              <span><FaCalendarAlt /> {selectedNotice.date}</span>
              {selectedNotice.time && <span><FaClock /> {selectedNotice.time}</span>}
              {selectedNotice.location && <span><FaMapMarkerAlt /> {selectedNotice.location}</span>}
            </div>
            <hr className="modal-divider" />
            <p className="modal-text">{selectedNotice.description}</p>
            <button className="btn-glow-primary full-width-btn" onClick={() => shareNotice(selectedNotice)}>
                <FaShareAlt /> {copiedNoticeId === selectedNotice.id ? 'Copied details' : 'Share this item'}
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeEvents;
