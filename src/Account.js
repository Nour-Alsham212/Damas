import React, { useState } from 'react';

const Account = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [publicProfile, setPublicProfile] = useState(false);
  const [shareData, setShareData] = useState(false);

  return (
    <div className="account-page">
      <h1>User Dashboard</h1>
      <div className="account-container">
        <div className="section recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Activity Item 1</li>
            <li>Activity Item 2</li>
            <li>Activity Item 3</li>
          </ul>
        </div>
        <div className="section bookmarks">
          <h2>Bookmarks</h2>
          <ul>
            <li>Bookmark1</li>
            <li>Bookmark2</li>
            <li>Bookmark3</li>
          </ul>
        </div>
        <div className="section account-summary">
          <h2>Account Summary</h2>
          <p>Details about account, such as membership status</p>
        </div>
        <div className="section profile-information">
          <h2>Profile Information</h2>
          <p>[Name, Email, etc.]</p>
          <button>Edit</button>
        </div>
        <div className="section notification-preferences">
          <h2>Notification Preferences</h2>
          <div className="toggle">
            <span>Email Alerts</span>
            <button onClick={() => setEmailAlerts(!emailAlerts)}>
              {emailAlerts ? 'ON' : 'OFF'}
            </button>
          </div>
          <div className="toggle">
            <span>SMS Alerts</span>
            <button onClick={() => setSmsAlerts(!smsAlerts)}>
              {smsAlerts ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <div className="section privacy-settings">
          <h2>Privacy Settings</h2>
          <label>
            <input
              type="checkbox"
              checked={publicProfile}
              onChange={() => setPublicProfile(!publicProfile)}
            />
            Public Profile
          </label>
          <label>
            <input
              type="checkbox"
              checked={shareData}
              onChange={() => setShareData(!shareData)}
            />
            Share Data
          </label>
        </div>
      </div>
    </div>
  );
};

export default Account;
