
import React from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {

  return (
      <div className="App">
        <div className="content-wrap">
          <Router>
            <Toolbar/>

            <Switch>
              <Route path="/portfolio" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </Router>
        </div>
        
        <Footer/>
      </div>
  );
};

export default App;
