import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer id="footer">
      <h1><span>B</span>E DAMASCENE</h1>
      <span><i className="bi bi-telephone" style={{ color: '#ffa500' }}></i> (990) 728-2211</span><br />
      <span><i className="bi bi-envelope" style={{ color: '#ffa500' }}></i> info@bedamascene.ca</span><br />
      <span><i className="bi bi-twitter" style={{ color: '#ffa500', padding: '5px' }}></i></span>
      <span><i className="bi bi-facebook" style={{ color: '#ffa500', padding: '5px' }}></i></span>
      <span><i className="bi bi-youtube" style={{ color: '#ffa500', padding: '5px' }}></i></span>
      <span><i className="bi bi-instagram" style={{ color: '#ffa500', padding: '5px' }}></i></span>
      <div className="copyright">
        <p>&copy; BE DAMASCENE. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
