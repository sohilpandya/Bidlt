var React = require('react');
var InterfaceButton = require('./interface-button.js')

var InterfaceButtons = React.createClass({
  render: function(){
    return (
      <div className="row interface-buttons">
        <div className="col s12 l12">

          <div className="col s12 l12 button-container">
            <InterfaceButton title={"CUSTOMER"} />
            <InterfaceButton title={"BUILDER"} />
            <InterfaceButton title={"SBSP"} />
          </div>

          <div className="col s12 l12 button-container">
            <InterfaceButton title={"PROJECT"} />
            <InterfaceButton title={"LEASES"} />
            <InterfaceButton title={"SUPPLIER"} />
          </div>

        </div>
      </div>
    );
  }
});

module.exports = InterfaceButtons;