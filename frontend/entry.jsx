var React = require('react'),
    ReactDOM = require('react-dom'),
    Pomodoro = require('./pomodoro');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Pomodoro/>, document.getElementById('root'));
});
