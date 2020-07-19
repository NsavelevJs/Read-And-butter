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

      <div className=''>
        
        {
          this.state.articles.map(article => (

<div className="max-w-sm rounded overflow-hidden m-4 shadow-lg items-center self-center">
<img class="w-full" src={article.img_url} alt=""/>
        

          <div className="font-bold text-xl mb-2 text-center">{article.title}</div>
          <p className="text-gray-700 text-base">{article.content}</p>
        
          <div className="flex items-center">
            <div className="text-sm">
          <p className="text-gray-900 leading-none">{article.user.username}</p>
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag</p>
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
          //  </div>
        // </div>
          )

          )
        }
      </div>
      // Got this card from : https://tailwindcss.com/components/cards     



    )
  }
}
