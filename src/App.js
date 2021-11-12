import React, { Component } from 'react';
import './App.css';
import Count from './Count';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Guna',
      count: 0,
      countStatus: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ ...this.state, [name]: value });
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : this.state.count,
    });
  };

  render() {
    console.log('rendered');
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="field-control">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="password"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="Enter the name"
            />
          </div>
          <div className="field-control">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
              placeholder="Enter the password"
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <button
          onClick={() =>
            this.setState({ countStatus: !this.state.countStatus })
          }
        >
          Counter Component Show/Hide
        </button>
        {this.state.countStatus ? (
          <div>
            <Count
              count={this.state.count}
              increment={this.handleIncrement}
              decrement={this.handleDecrement}
            />
            <button onClick={() => this.setState({ count: 0 })}>
              Reset count{' '}
            </button>
          </div>
        ) : null}
        <br />
        <br />
      </div>
    );
  }
}

export default App;
