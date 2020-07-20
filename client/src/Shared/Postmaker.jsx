import React, { Component } from 'react'
import { addArticle } from '../services/api-helper';
import { getArticles } from '../services/articles';
import {withRouter} from 'react-router-dom'
class Postmaker extends Component {
    state = {
        articles: null,
        addArticle: false,
        article: {
            title: '',
            content: '',
            img_url: ''
        },
        tag: null

    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const articles = await getArticles()
        this.setState({
            articles
        })
    }


    handleChange = (e) => {
        const { name, value } = e.target
        this.setState(prevState => ({
            article: {
                ...prevState.article,
                [name]: value
            }
        }))
    }
    handleAdd = async (e) => {
        e.preventDefault();
        const newArticle = await addArticle(this.state.tag, this.state.article)
        this.setState(prevState => ({
            articles: [...prevState.articles, newArticle]
        }))
        this.props.history.push('/')
    }

    handleDropDown = (e) => {
        const { value } = e.target
        this.setState({
            tag: value
        })
    }

    render() {
        
        return (
            <div className='flex justify-center'>

                <form onSubmit={(e)=>{
                    e.preventDefault()
                    this.props.handleAdd(this.state.tag, this.state.article)
                }} className="w-full max-w-sm self-center"
                >
                    <h3>Create An Article</h3>

                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Title
            <input
                            name='title'
                            type='text'
                            value={this.state.article.title}
                            onChange={this.handleChange} 
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-200" id="inline-full-name"
                            />
                    </label>
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Image
            <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-200" id="inline-full-name"
                            name='img_url'
                            type='text'
                            value={this.state.article.img_url}
                            onChange={this.handleChange} />
                    </label>
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Content
            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-200" id="inline-full-name" type="text" placeholder="Content"
                            name='content'
                            type='text'
                            value={this.state.article.content}
                            onChange={this.handleChange} />
                    </label>

                    <select onChange={this.handleDropDown} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        {this.props.tags.map(tag => (
                            <option value={tag.id}> {tag.title}</option>
                        ))}
                    </select>

                    <button className="flex-shrink-0 bg-orange-300 hover:bg-orange-500 border-orange-400 hover:border-orange-200 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Submit</button>

                </form>

            </div>
        )
    }
}
export default withRouter(Postmaker)
// Got this card from : https://tailwindcss.com/components/cards