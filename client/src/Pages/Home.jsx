import React from 'react'
import Articles from '../Shared/Articles'
import {deleteArticle} from '../services/api-helper'


export default function Home(props) {
  
    return (
    <div>
      <Articles handleDelete={props.handleDelete} currentUser={props.currentUser} articles={props.articles}/>
      </div>
    )
  }