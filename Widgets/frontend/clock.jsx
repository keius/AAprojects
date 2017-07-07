import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
    this.timerId = 0;
  }

  render(){
    return (
      <div>
        <h1>Clock</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  tick() {
    this.setState( { date: new Date() } );
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

}

export default Clock;
