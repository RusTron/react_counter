import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
  };

  increase = () => {
    if (this.state.count && (this.state.count + 1) % 5 === 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.addOne();
          }}
        >
          {' AddOne '}
        </button>
        <button
          type="button"
          onClick={() => {
            this.add100();
          }}
        >
          {' Add100 '}
        </button>
        <button
          type="button"
          onClick={() => {
            this.increase();
          }}
        >
          {' Increase '}
        </button>
      </>
    );
  }
}

export default App;
