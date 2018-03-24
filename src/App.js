import React, { Component } from 'react';
import './App.css';
import {Route,HashRouter,Redirect} from 'react-router-dom';
import Navigation from './Navigation.js';
import Home from './Home.js';
import Prog from './Prog.js';
import Equip from './Equip.js';

class App extends Component {

  render() {
  	return(
    <HashRouter>
      <div className="content">
        <div className="row">
          <div className="col"></div>

          <div className="col-md-8">

            <div className="header">
              <Navigation />
            </div>

            <div className="body">
              <Redirect from="/" to="/home" />
              <Route path="/home" component={Home}></Route>
              <Route path="/prog" component={Prog}></Route>
              <Route path="/equip" component={Equip}> </Route>
            </div>
        
          </div>

          <div className="col"></div>
        </div>
      </div>
    </HashRouter>
    );
  }
}

export default App;
