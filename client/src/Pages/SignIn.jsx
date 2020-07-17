import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignIn extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    const { username, password } = this.state;
    const { handleLogin, history } = this.props;

    return (

      <div className="container flex justify-center flex-wrap bg-white mx-auto px-4 font-serif">
        <form className="w-full max-w-sm"
            onSubmit={(e) => {
            e.preventDefault();
            handleLogin(this.state);
            history.push('/')
          }}>
          {/* <div className="flex items-center border-b border-b-2 border-orange-400 py-2"> */}
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Username"
              aria-label="Username"
              name="username"
              value={username}
              onChange={this.handleChange} />
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              placeholder="Password"
              aria-label="Password"
              name="password"
              value={password}
              onChange={this.handleChange} />

            <button className="flex-shrink-0 bg-orange-300 hover:bg-orange-500 border-orange-400 hover:border-orange-200 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Sign In
              </button>


            <Link className="flex-shrink-0 border-transparent border-4 text-orange-500 hover:text-orange-300 text-sm py-1 px-2 rounded" type="button" to='/SignUp'>
              Sign Up
              </Link>

          {/* </div> */}
        </form>
      </div>
    )

  }
}
