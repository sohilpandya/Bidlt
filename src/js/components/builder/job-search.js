var React = require('react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');
var Slider = require('material-ui/lib/slider');
var JobData = require('./job-data.js');

var JobSearch = React.createClass({

  getInitialState: function() {
    return {
      trade: "all",
      jobType: "all",
      proximity: 10
    };
  },

  getJobSearchResult: function() {
      var trade = this.state.trade
      var jobType = this.state.jobType
      var results = JobData.filter(function(elem) {
        if (trade === 'All') {
          return elem
        } else if (elem.trade == trade) {
          return elem
        }
      }).filter(function(elem){
        console.log(elem);
        if (jobType === 'All') {
          return elem
        } else if (elem.jobType == jobType) {
          return elem
        }
      })

      console.log(results);
  },

  getValue: function(event, index, value) {
    this.setState({
      trade: value
    });
  },

  getJobType: function(event, index, value) {
    this.setState({
      jobType: value
    });
  },

  getProximity: function(event, value) {
    this.setState({
      proximity: value
    });
  },


  render: function(){
    return (
      <div className="main-padding margin-30 row">
        <div className="component-title-box">
        <h5 className="center-align"> Available Jobs </h5>
        </div>
        <label>Your Trade</label>
        <div className="row">
          <div className="col s12 l6">
            <SelectField value={this.state.trade} onChange={this.getValue}>
              <MenuItem value={'All'} primaryText="All"/>
                <MenuItem value={'Carpenter'}  primaryText="Carpenter"/>
              <MenuItem value={'Plumber'}  primaryText="Plumber"/>
                <MenuItem value={'Electrician'} disabled primaryText="Electrician"/>
              <MenuItem value={'Ground Work'} disabled primaryText="Ground Work"/>
              <MenuItem value={'Plasterer'} disabled primaryText="Plasterer"/>
              <MenuItem value={"Painter"} disabled primaryText= "Painter"/>
              <MenuItem value={"Brick Layer"} disabled primaryText= "Brick Layer"/>
            </SelectField>
          </div>
        </div>
        <label>Job Type</label>
        <div className="row">
          <div className="col s12 l6">
            <SelectField value={this.state.jobType} onChange={this.getJobType}>
              <MenuItem value={'All'} primaryText="All"/>
              <MenuItem value={'Self Build'} primaryText="Self Build"/>
              <MenuItem value={'Small Project'} primaryText="Small Project"/>
              <MenuItem value={'TLC'} disabled primaryText="TLC"/>
            </SelectField>
          </div>
        </div>
        <label>Proximity</label>
        <div className="row">
          <div className="col s12 l6">
            <Slider min={0} max={50} step={1} value={this.state.proximity} onChange={this.getProximity}/>
          </div>
        </div>
        <div className="row right-align">
          <div className="col s12 l6 right-align">
            <button onClick={this.getJobSearchResult} className=" darkest-color btn waves-effect waves-light" type="submit" name="action">Search
            <i className="material-icons right">search</i>
            </button>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = JobSearch;
