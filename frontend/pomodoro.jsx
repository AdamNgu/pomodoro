var React = require('react'),
    Display = require('./display'),
    Buttons = require('./buttons'),
    Dials = require('./dials');

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

  breakTimeChange: function(difference){
    if (this.state.breakTime > 1 || difference > 1) {
      this.setState({breakTime: this.state.breakTime + difference});
    }
  },

  workTimeChange: function(difference){
    var workTime = this.state.workTime + difference;
    if (this.state.workTime === 1 && difference < 1) {

    }
    else if(this.state.timeRemaining === this.state.workTime * 60) {
      var timeRemaining = workTime * 60;
      this.setState({
        workTime: workTime,
        timeRemaining: timeRemaining
      });
    }
    else {
      this.setState({workTime: workTime});
    }
  },


  render: function(){
    var titleText;

    if(this.state.isBreak){
      titleText = "Take a break!";
    }
    else {
      titleText = "Get to work!";
    }

    return(
      <div>
        <h2>{titleText}</h2>
        <Dials
          breakTime={this.state.breakTime}
          workTime={this.state.workTime}
          workTimeChange={this.workTimeChange}
          breakTimeChange={this.breakTimeChange}
        />
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
