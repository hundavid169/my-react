import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Add from './users/Add.js';
import List from './users/List.js';
import Home from './home/Home.js';
import Calculator from './calculator/Calculator.js';
import Detail from './users/Detail.js';
import Edit from './users/Edit.js';
import Test from './Test.js';

class App extends Component {
   

  render() {
    
    return (
      <Router>
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <ul className="nav navbar-nav">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/users/Add'}>Register</Link></li>
              <li><Link to={'/users/List'}>Users List</Link></li>
              <li><Link to={'/Calculator'}>Calculator</Link></li>
            </ul>
          </div>
        </nav>
        
        <div className="container">      
          <Switch>
              <Route exact path='/users/Add' component={Add} />
              <Route exact path='/users/List' component={List} />
              <Route exact path='/Calculator' component={Calculator} />
              <Route exact path='/' component={Home} />
              <Route exact path='/users/Detail/:id' component={Detail} />
              <Route exact path='/users/Edit/:id' component={Edit} />
              <Route exact path='/test' component={Test} />
          </Switch>
        </div>
        
      </div>
      </Router>



    );
  }
}

export default App;
