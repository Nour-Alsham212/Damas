import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lessons from './Lessons';
import BeginnerLessons from './BeginnerLessons';
import IntermediateLessons from './IntermediateLessons';
import AdvancedLessons from './AdvancedLessons';
import Community from './Community';
import Chat from './Chat';
import Forum from './Forum';
import UserProfiles from './UserProfiles';
import Culture from './Culture';
import Account from './Account';
import Contact from './Contact';
import Chatbot from './Chatbot';
import QuickAccessMenu from './QuickAccessMenu';
import PopupNotification from './PopupNotification';
import './i18n';
import FAQ from './FAQ';
import Auth from './Auth';

function App() {
  const [showNotification, setShowNotification] = useState(true);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        {showNotification && (
          <PopupNotification
            message="Check out our new feature!"
            onClose={handleCloseNotification}
          />
        )}
        <QuickAccessMenu />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lessons" component={Lessons} />
            <Route path="/lessons/beginner" component={BeginnerLessons} />
            <Route path="/lessons/intermediate" component={IntermediateLessons} />
            <Route path="/lessons/advanced" component={AdvancedLessons} />
            <Route exact path="/community" component={Community} />
            <Route path="/community/chat" component={Chat} />
            <Route path="/community/forum" component={Forum} />
            <Route path="/community/profiles" component={UserProfiles} />
            <Route exact path="/culture" component={Culture} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </div>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
