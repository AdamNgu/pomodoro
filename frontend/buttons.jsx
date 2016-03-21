var React = require('react');

var Buttons = React.createClass({
  render: function(){
    if(this.props.running){
      btn1Text = "stop";
    }
    else {
      btn1Text = "start";
    }

    return(
      <div>
        <button onClick={this.props.toggleRunning}/>
      </div>
    );
  }
});

module.exports = Buttons;
