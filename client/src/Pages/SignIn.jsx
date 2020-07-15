import React, { Component } from 'react'

export default class SignIn extends Component {
    render() {
        return (
            <form class="w-full max-w-sm">
            <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
              <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Username" aria-label="Username"/>
              <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Password" aria-label="Password"/>
              <button class="flex-shrink-0 bg-orange-300 hover:bg-orange-200 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Sign In
              </button>
              <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                Sign Up
              </button>
            </div>
          </form>
        )
    
}
}
