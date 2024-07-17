import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookmark, faBell, faCogs, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

const Account = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [publicProfile, setPublicProfile] = useState(false);
  const [shareData, setShareData] = useState(false);

  const toggleEmailAlerts = () => {
    setEmailAlerts(!emailAlerts);
  };

  const toggleSmsAlerts = () => {
    setSmsAlerts(!smsAlerts);
  };

  const togglePublicProfile = () => {
    setPublicProfile(!publicProfile);
  };

  const toggleShareData = () => {
    setShareData(!shareData);
  };

  // Sample data for recent activity and bookmarks
  const recentActivities = [
    'Completed Lesson: Arabic Alphabet',
    'Participated in Forum: Favorite Arabic Phrases',
    'Joined Chat: Beginner Chat'
  ];

  const bookmarks = [
    'Saved Lesson: Advanced Grammar',
    'Bookmarked Forum Thread: Cultural Experiences',
    'Saved Chat: Advanced Discussions'
  ];

  return (
    <div className="account-page">
      <h1>User Dashboard</h1>
      <div className="account-container">
        <div className="section recent-activity">
          <h2><FontAwesomeIcon icon={faBell} /> Recent Activity</h2>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
        <div className="section bookmarks">
          <h2><FontAwesomeIcon icon={faBookmark} /> Bookmarks</h2>
          <ul>
            {bookmarks.map((bookmark, index) => (
              <li key={index}>{bookmark}</li>
            ))}
          </ul>
        </div>
        <div className="section account-summary">
          <h2><FontAwesomeIcon icon={faUser} /> Account Summary</h2>
          <p>Details about account, such as membership status</p>
        </div>
        <div className="section profile-information">
          <h2><FontAwesomeIcon icon={faUser} /> Profile Information</h2>
          <p>[Name, Email, etc.]</p>
          <button data-tooltip-id="edit-profile-tooltip">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
          <Tooltip id="edit-profile-tooltip" place="top" effect="solid">
            Edit your profile information
          </Tooltip>
        </div>
        <div className="section notification-preferences">
          <h2><FontAwesomeIcon icon={faBell} /> Notification Preferences</h2>
          <div className="toggle">
            <span>Email Alerts</span>
            <button onClick={toggleEmailAlerts} data-tooltip-id="email-alerts-tooltip">
              {emailAlerts ? 'ON' : 'OFF'}
            </button>
            <Tooltip id="email-alerts-tooltip" place="top" effect="solid">
              Toggle email alerts
            </Tooltip>
          </div>
          <div className="toggle">
            <span>SMS Alerts</span>
            <button onClick={toggleSmsAlerts} data-tooltip-id="sms-alerts-tooltip">
              {smsAlerts ? 'ON' : 'OFF'}
            </button>
            <Tooltip id="sms-alerts-tooltip" place="top" effect="solid">
              Toggle SMS alerts
            </Tooltip>
          </div>
        </div>
        <div className="section privacy-settings">
          <h2><FontAwesomeIcon icon={faCogs} /> Privacy Settings</h2>
          <label data-tooltip-id="public-profile-tooltip">
            <input
              type="checkbox"
              checked={publicProfile}
              onChange={togglePublicProfile}
            />
            Public Profile
            <Tooltip id="public-profile-tooltip" place="right" effect="solid">
              Toggle public profile visibility
            </Tooltip>
          </label>
          <label data-tooltip-id="share-data-tooltip">
            <input
              type="checkbox"
              checked={shareData}
              onChange={toggleShareData}
            />
            Share Data
            <Tooltip id="share-data-tooltip" place="right" effect="solid">
              Toggle data sharing
            </Tooltip>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Account;
