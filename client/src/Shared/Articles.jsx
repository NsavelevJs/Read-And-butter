import React, { Component } from 'react'

export default class Articles extends Component {
    state
    render() {
        return (
            
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                
                <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">NickS</p>
                  <p className="text-gray-600">Date</p>
                  <ul className="flex ">
<li>
                  <a href="" className="text-gray-600 shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Edit</a>
</li>

<li>
                  <a className="text-gray-600 shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Delete</a>
</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    // Got this card from : https://tailwindcss.com/components/cards     
            


        )
    }
}
