var React = require('react'),
    Display = require('./display'),
    Buttons = require('./buttons');

var Pomodoro = React.createClass({
  getInitialState: function(){
      return {
        timeRemaining: 1500,
        running: false,
        isBreak: false,
        workTime: 25,
        breakTime: 5
      };
  },

  componentDidMount: function(){
    setInterval(this.tick, 1000);
  },

  tick: function(){
    if(this.state.running){
      this.setState({timeRemaining: this.state.timeRemaining - 1});

      // if the timer reaches 0, change isBreak status and reset timer
      if(this.state.timeRemaining <= 0){
        var timeRemaining;
        if(this.state.isBreak){
          timeRemaining = this.state.workTime * 60;
        }
        else {
          timeRemaining = this.state.breakTime * 60;
        }
        this.setState({timeRemaining: timeRemaining, isBreak: !this.state.isBreak});
      }
    }
  },

  toggleRunning: function(){
    this.setState({running: !this.state.running});
  },

  reset: function(){
    this.setState({
      timeRemaining: this.state.workTime * 60,
      running: false,
      isBreak: false
    });
  },

  render: function(){
    return(
      <div>
        <div>Pomodoro timer</div>
        <Display timeRemaining={this.state.timeRemaining}/>
        <Buttons
          running={this.state.running}
          toggleRunning={this.toggleRunning}
          reset={this.reset}
        />
      </div>
    );
  }
});

module.exports = Pomodoro;
