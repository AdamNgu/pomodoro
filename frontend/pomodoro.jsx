var React = require('react'),
    Display = require('./display'),
    Buttons = require('./buttons');

var Pomodoro = React.createClass({
  getInitialState: function(){
      return {timeRemaining: 1500, running: false, isBreak: false};
  },

  componentDidMount: function(){
    setInterval(this.tick, 1000);
  },

  tick: function(){
    if(this.state.running){
      this.setState({timeRemaining: this.state.timeRemaining - 1});
    }
  },

  toggleRunning: function(){
    this.setState({running: !this.state.running});
  },

  render: function(){
    return(
      <div>
        <div>Pomodoro timer</div>
        <Display timeRemaining={this.state.timeRemaining}/>
        <Buttons
          running={this.state.running}
          toggleRunning={this.toggleRunning}
        />
      </div>
    );
  }
});

module.exports = Pomodoro;
