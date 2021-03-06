var React = require('react');

var Display = React.createClass({
  render: function(){

    // conversion to minutes, seconds left
    var minutes = Math.floor(this.props.timeRemaining/60);
    var seconds = this.props.timeRemaining - minutes * 60;
    seconds = seconds.toString();
    if(seconds.length === 1) {
      seconds = "0" + seconds;
    }

    return(
      <div>
        <h1 className="display">{minutes}:{seconds}</h1>
        <h4>Cycles Completed: {this.props.cyclesCompleted}</h4>
    </div>
    );
  }
});

module.exports = Display;
