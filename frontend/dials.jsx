var React = require('react');

var Dials = React.createClass({

  workTimeDecrease: function(){
    this.props.workTimeChange(-1);
  },

  workTimeIncrease: function(){
    this.props.workTimeChange(1);
  },

  breakTimeDecrease: function(){
    this.props.breakTimeChange(-1);
  },

  breakTimeIncrease: function(){
    this.props.breakTimeChange(1);
  },

  render: function(){
    return(
      <div className="dials">
          <div className="leftDial">
            <h4>Work Time</h4>
            <button onClick={this.workTimeDecrease}>-</button>
            {this.props.workTime}
            <button onClick={this.workTimeIncrease}>+</button>
          </div>
          <div className="rightDial">
            <h4>Break Time</h4>
            <button onClick={this.breakTimeDecrease}>-</button>
            {this.props.breakTime}
            <button onClick={this.breakTimeIncrease}>+</button>
          </div>
      </div>
    );
  }
});

module.exports = Dials;
