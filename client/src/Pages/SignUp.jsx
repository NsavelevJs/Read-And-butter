import React, { Component } from 'react'

export default class SignUp extends Component {
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
          const { handleRegister, history } = this.props;
      
          return (
            
      <div className="flex justify-center">
        <form onSubmit={(e) => {
              e.preventDefault();
              handleRegister(this.state);
              history.push('/');
            }} className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Make a Username
      </label>
            </div>
            <div className="md:w-2/3">
              <input name="username"
                  value={username}
                  onChange={this.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-200" id="inline-full-name" type="text" placeholder="Username" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                Set a password
      </label>
            </div>
            <div className="md:w-2/3">
              <input name="password"
                  value={password}
                  onChange={this.handleChange}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-200" id="inline-username" type="password" placeholder="******************" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Sign Up
      </button>
            </div>
          </div>
        </form>
      </div>
          )
        }
      }
