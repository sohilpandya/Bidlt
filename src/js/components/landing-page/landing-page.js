var React = require('react');
var LandingHeader = require('./landing-header.js');

var LandingPage = React.createClass({
  render: function(){
    return (
      <div className="col s12 l12 landing-page">
        <LandingHeader />
      </div>
    );
  }
});

module.exports = LandingPage;
