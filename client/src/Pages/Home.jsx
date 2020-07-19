import React from 'react'
import Articles from '../Shared/Articles'



export default function Home(props) {
    
    return (
    <div>
      <Articles currentUser={props.currentUser}/>
      </div>
    )
  }