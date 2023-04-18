import React from 'react';
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    } 
    
  
    componentWillUnmount() {
      clearInterval(this.timerID); 
      console.log(this.timerID)
    }
  
    tick() {
      this.setState({ 

        date: new Date()  
      }); 
      console.log("date");
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  } 
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Clock />);
  export default Clock;