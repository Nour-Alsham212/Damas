import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lessons from './Lessons';
import Community from './Community';
import Culture from './Culture';
import Account from './Account';
import Contact from './Contact';
import Chatbot from './Chatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lessons" component={Lessons} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/culture" component={Culture} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
