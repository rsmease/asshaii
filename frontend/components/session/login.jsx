import React from 'react';
import { Link, Router } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/app'));
  }

  render() {
    return (
      <div className="session-form-container">
        <h2 className="session-form-header">Log In</h2>
        <br></br>
          <div className="demo-div">
            <input
              type="submit"
              className = "session-form-submit session-demo"
              value="View Demo"
            />
          </div>
          <br></br>
        <form className="session-form">

          <label>EMAIL ADDRESS</label>
          <br></br>

            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
          <br></br>

          <label>PASSWORD</label>
          <br></br>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          <br></br>

          <button className="session-form-submit"
            onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
