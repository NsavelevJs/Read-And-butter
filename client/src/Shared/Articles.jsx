import React, { Component } from 'react'
import {getArticles} from '../services/articles'
export default class Articles extends Component {
  state={
    articles:[]
  }
  componentDidMount= async () => {
const articles = await getArticles()
this.setState({articles})
  }
  render() {
    return (

      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
        </div>
        {
          this.state.articles.map(article => (

        
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">

          <div className="text-gray-900 font-bold text-xl mb-2">{article.title}</div>
          <p className="text-gray-700 text-base">{article.content}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
          <p className="text-gray-900 leading-none">{article.user.username}</p>
              <p className="text-gray-600">Date</p>
              <ul className="flex ">

                {this.props.currentUser && this.props.currentUser.id == article.user_id &&
                <>
                <li>
                  <button href="" className="text-gray-600 shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Edit</button>
                </li>

                <li>
                  <button className="text-gray-600 shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Delete</button>
                </li>
                </>
                }

              </ul>
            </div>
            
          </div>
          
        </div>
          )

          )
        }
      </div>
      // Got this card from : https://tailwindcss.com/components/cards     



    )
  }
}
