var React = require('react');

var Buttons = React.createClass({
  render: function(){
    if(this.props.running){
      btn1Text = "Stop";
    }
    else {
      btn1Text = "Start";
    }

    return(
      <div className="buttons">
        <button className="leftButton" onClick={this.props.toggleRunning}>{btn1Text}</button>
        <button className="rightButton" onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
});

module.exports = Buttons;
