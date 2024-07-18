import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import exploreDamascusHistoryImage from './images/explor-damascus-hostory.jpeg';
import learnTheArabicAlphabetImage from './images/Learn the Arabic Alphabet.jpeg';
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isNewUser = !localStorage.getItem('visited');
  if (isNewUser) {
    localStorage.setItem('visited', 'true');
  }

  const operatingHours = [
    { day: t('Monday'), hours: '8:00AM - 8:00PM' },
    { day: t('Tuesday'), hours: '8:00AM - 8:00PM' },
    { day: t('Wednesday'), hours: '8:00AM - 8:00PM' },
    { day: t('Thursday'), hours: '8:00AM - 8:00PM' },
    { day: t('Friday'), hours: '8:00AM - 8:00PM' },
    { day: t('Saturday'), hours: '10:00AM - 6:00PM' },
    { day: t('Sunday'), hours: t('Closed') },
  ];

  return (
    <div className="Home">
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')} data-tooltip-id="en-tooltip" aria-label="Change language to English">
          English
        </button>
        <Tooltip id="en-tooltip" place="top" effect="solid">
          Change language to English
        </Tooltip>
        <button onClick={() => changeLanguage('ar')} data-tooltip-id="ar-tooltip" aria-label="Change language to Arabic">
          Arabic
        </button>
        <Tooltip id="ar-tooltip" place="top" effect="solid">
          Change language to Arabic
        </Tooltip>
      </div>
      {isNewUser && (
        <div className="welcome-banner">
          <h2>{t('Welcome to Be Damascene!')}</h2>
          <p>{t('Explore our features and enjoy learning.')}</p>
        </div>
      )}
      <h2>{t('WELCOME TO BE DAMASCENE!')}</h2>
      <h3>{t('Explore the beauty of Arabic language and culture')}</h3>

      <div className="feature-content">
        <div className="feature-item" data-tooltip-id="explore-damascus-tooltip">
          <img src={exploreDamascusHistoryImage} alt={t('Explore Damascus History')} />
          <h5>{t('Explore Damascus History')}</h5>
          <Tooltip id="explore-damascus-tooltip" place="top" effect="solid">
            Learn more about the rich history of Damascus
          </Tooltip>
        </div>
        <div className="feature-item" data-tooltip-id="learn-alphabet-tooltip">
          <img src={learnTheArabicAlphabetImage} alt={t('Learn the Arabic Alphabet')} />
          <h5>{t('Learn the Arabic Alphabet')}</h5>
          <Tooltip id="learn-alphabet-tooltip" place="top" effect="solid">
            Start learning the Arabic alphabet today
          </Tooltip>
        </div>
      </div>

      <div className="operating-hours-card" data-tooltip-id="operating-hours-tooltip">
        <div className="card">
          <h4>{t('Operating Hours')}</h4>
          <ul>
            {operatingHours.map((item, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCalendarDay} className="day-icon" aria-hidden="true" />
                <span className="day">{item.day}</span>
                <FontAwesomeIcon icon={faClock} className="clock-icon" aria-hidden="true" />
                <span className="hours">{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
        <Tooltip id="operating-hours-tooltip" place="top" effect="solid">
          Check our operating hours
        </Tooltip>
      </div>
    </div>
  );
}

export default Home;
