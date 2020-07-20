import React, { Component } from 'react'
import { getArticles } from '../services/articles'
import { deleteArticle, getTags } from '../services/api-helper'
import { withRouter, Link} from 'react-router-dom'

class Articles extends Component {
  state = {
    articles: [],
    deleteArticle: false
  }
  // componentDidMount = async () => {
  //   const articles = await getArticles()
  //   this.setState({ articles })
  //   this.props.history.push('/')

  // }


  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      article: {
        ...prevState.article,
        [name]: value
      }
    }))
  }





  render() {
    return (

      <div className=''>

        {
          this.props.articles.map(article => (

            <div className="max-w-sm rounded overflow-hidden m-4 shadow-lg mx-auto sm: mx-auto md: mx-auto">
              <img class="w-full" src={article.img_url} alt="" />


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
                          <Link to={`/Edit/${article.id}`}>
                          <button  className="text-gray-600 shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Edit</button>
                          </Link>
                        </li>

                        <li>
                          <button onClick={() => this.props.handleDelete(article.id)} className="text-gray-600 shadow bg-orange-300 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Delete</button>
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
export default withRouter(Articles)
