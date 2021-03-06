import React, { Component } from 'react'
import { putArticle } from '../services/api-helper'
import { withRouter } from 'react-router-dom'
export default class Edit extends Component {
    state = {
        title: "",
        content: "",
        img_url: ""
    }
    setFormData = () => {
        const { title, content, img_url } = this.props.article
        this.setState({ title, content, img_url })
    }
    componentDidMount = ()=>{
        if(this.props.article){
            this.setFormData()
        }
    }
    componentDidUpdate=(prevProps)=>{
        if(prevProps.article !== this.props.article){
            this.setFormData()
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    

    render() {
        return (
            <div>
                <div className='flex justify-center'>

                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        this.props.handleEdit(this.props.article.tag.id, this.props.article.id, this.state)
                    }} className="w-full max-w-sm self-center"
                    >
                        <h3>Edit Your Article</h3>

                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Title
<input
                                name='title'
                                type='text'
                                value={this.state.title}
                                onChange={this.handleChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-200" id="inline-full-name"
                            />
                        </label>
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Image
<input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-200" id="inline-full-name"
                                name='img_url'
                                type='text'
                                value={this.state.img_url}
                                onChange={this.handleChange} />
                        </label>
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Content
<textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-200" id="inline-full-name" type="text" placeholder="Content"
                                name='content'
                                type='text'
                                value={this.state.content}
                                onChange={this.handleChange} />
                        </label>

                        <button className="flex-shrink-0 bg-orange-300 hover:bg-orange-500 border-orange-400 hover:border-orange-200 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Submit</button>

                    </form>

                </div>

            </div>
        )
    }
}


