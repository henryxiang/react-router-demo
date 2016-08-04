import React, { Component } from 'react';
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router';

const Home = () => <div><Links />Home</div>;
const About = () => <div><Links />About</div>;
const Contact = () => <div><Links />Contact</div>;

const Links = () => 
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>  
        <Route path="/about" component={About}></Route>  
        <Route path="/contact" component={Contact}></Route>  
      </Router>
    );
  }
};

export default App;
