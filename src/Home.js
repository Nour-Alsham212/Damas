import React from 'react';
import exploreDamascusHistoryImage from '/Users/fadialsaidi/Desktop/Project2/be_damas1/src/images/explor-damascus-hostory.jpeg';
import learnTheArabicAlphabetImage from '/Users/fadialsaidi/Desktop/Project2/be_damas1/src/images/Learn the Arabic Alphabet.jpeg';


const Home = () => {
  return (
    <div className="Home">
      <h2>WELCOME TO BE DAMASCENE!</h2>
      <h3>Explore the beauty of Arabic language and culture</h3> 

      <div className="feature-content">
        <div className="feature-item">
          <img src={exploreDamascusHistoryImage} alt="Explore Damascus History" />
          <h5>Explore Damascus History</h5>
        </div>
        <div className="feature-item">
          <img src={learnTheArabicAlphabetImage} alt="Learn the Arabic Alphabet" />
          <h5>Learn the Arabic Alphabet</h5>
        </div>
      </div>

      <div className="operating-hours-card">
        <div className="card">
          <h4>Operating Hours</h4>
          <p>Monday <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>Tuesday <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>Wednesday <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>Thursday <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>Friday <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>Saturday <i className="icon arrow-icon"></i> 10:00AM-6:00PM</p>
          <p>Sunday <i className="icon arrow-icon"></i> Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
