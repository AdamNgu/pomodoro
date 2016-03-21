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
      <div>
        <button onClick={this.workTimeDecrease}>-</button>
        {this.props.workTime}
        <button onClick={this.workTimeIncrease}>+</button>
        <button onClick={this.breakTimeDecrease}>-</button>
        {this.props.breakTime}
        <button onClick={this.breakTimeIncrease}>+</button>

      </div>
    );
  }
});

module.exports = Dials;
