import React, { useContext } from 'react';
import {themeContext} from './context'

export default function PostsList({post}){  
    const {background,color} = useContext(themeContext)
    return(    
    <div style={{background:background,color:color}}>
    <h1>{post.first_name} {post.last_name}</h1>
     <img src={post.avatar}/>
     <p>{post.email}</p>
    </div>
    )
}