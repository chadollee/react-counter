import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: 0 }
  //   this.inc = this.inc.bind(this)
  //   this.dec = this.dec.bind(this)
  // }

  // state = { value: 0 }

  // inc() {
  //   this.setState( (state) => {
  //     return { value: state.value + 1 }
  //     // console.log(this.state.value)
  //   });
  // }

  // dec() {
  //   this.setState( (state) => {
  //     return { value: state.value - 1 }
  //     // console.log(this.state.value)
  //   });
  // }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Counter Example</h1>
        {/* <p>{this.state.value}</p> */}
        <Counter name="orange" />
        <Counter name="red" />
        <Counter name="green" />
        <Counter name="purple" />
        {/* <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button> */}
      </div>
    );
  }
}

export default App;