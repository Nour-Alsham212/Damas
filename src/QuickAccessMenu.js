import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './index.css';

const QuickAccessMenu = () => {
  return (
    <div className="quick-access-menu">
      <Link to="/lessons" className="quick-access-item">
        <FontAwesomeIcon icon={faBook} />
        <span>Lessons</span>
      </Link>
      <Link to="/community" className="quick-access-item">
        <FontAwesomeIcon icon={faChalkboardTeacher} />
        <span>Community</span>
      </Link>
      <Link to="/culture" className="quick-access-item">
        <FontAwesomeIcon icon={faHeadphones} />
        <span>Culture</span>
      </Link>
    </div>
  );
};

export default QuickAccessMenu;
