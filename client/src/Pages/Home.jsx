import React from 'react'
import Articles from '../Shared/Articles'
import {deleteArticle} from '../services/api-helper'



export default function Home(props) {
  
    return (
    <div>
      <Articles currentUser={props.currentUser}/>
      </div>
    )
  }