import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import exploreDamascusHistoryImage from './images/explor-damascus-hostory.jpeg';
import learnTheArabicAlphabetImage from './images/Learn the Arabic Alphabet.jpeg';
import { Tooltip } from 'react-tooltip';

const Home = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isNewUser = !localStorage.getItem('visited');
  if (isNewUser) {
    localStorage.setItem('visited', 'true');
  }

  return (
    <div className="Home">
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')} data-tooltip-id="en-tooltip">English</button>
        <Tooltip id="en-tooltip" place="top" effect="solid">
          Change language to English
        </Tooltip>
        <button onClick={() => changeLanguage('ar')} data-tooltip-id="ar-tooltip">Arabic</button>
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
          <p>{t('Monday')} <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>{t('Tuesday')} <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>{t('Wednesday')} <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>{t('Thursday')} <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>{t('Friday')} <i className="icon arrow-icon"></i> 8:00AM-8:00PM</p>
          <p>{t('Saturday')} <i className="icon arrow-icon"></i> 10:00AM-6:00PM</p>
          <p>{t('Sunday')} <i className="icon arrow-icon"></i> {t('Closed')}</p>
        </div>
        <Tooltip id="operating-hours-tooltip" place="top" effect="solid">
          Check our operating hours
        </Tooltip>
      </div>
    </div>
  );
}

export default Home;
