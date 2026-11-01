import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import '../stylesheet/Notfound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        {/* Glow Effects */}
        <div className="glow-circle"></div>

        <div className="notfound-badge">
          <FaExclamationTriangle className="badge-icon" /> 404 Error
        </div>

        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        
        <p className="error-desc">
          The address may be incorrect, or the page may have moved. Choose a page below to continue.
        </p>

        <div className="notfound-actions">
          <button onClick={() => navigate(-1)} className="btn-back">
            <FaArrowLeft /> Go Back
          </button>
          <NavLink to="/" className="btn-home">
            <FaHome /> Back to Home Page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
