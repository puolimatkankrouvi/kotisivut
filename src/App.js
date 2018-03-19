import React, { Component } from 'react';
import './App.css';
import {Route,HashRouter} from 'react-router-dom';
import Navigation from './Navigation.js';
import Home from './Home.js';
import Cv from './Cv.js';

class App extends Component {

  render() {
  	return(
    <HashRouter>
      <div>
        <div className="header">
          <Navigation />
        </div>

        <div className="content">
          <Route path="/home" component={Home}></Route>
          <Route path="/cv" component={Cv}></Route>
        </div>
      </div>
    </HashRouter>
    );
  }
}

export default App;
