var React = require('react');
var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');


// Main component is always active
// Main needs to be in charge of rendering any child routes inside
// that become active
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One'
        component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header ='Player Two'
        component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;
