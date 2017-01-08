var React = require('react');


import {Router, Route, IndexRoute, hashHistory} from 'react-router'

var Main = require('../components/Main');
var Home = require('../components/Home');


// Main component is always active
// Main needs to be in charge of rendering any child routes inside
// that become active
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
