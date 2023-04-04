import React from 'react'
import posts from '../data/posts'
import { NavLink } from 'react-router-dom'

const Blog = () => {
 // console.log(posts)
  return (
    <div>
        <h3>Pagina de Blog</h3>
        <p>Esta es la Pagina de Blog</p>
        <ul>
            {posts.map((posts, index)=> (
              <li key={posts.id}>
              <NavLink to={`/blog/${posts.id}`}> {posts.title} </NavLink>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Blog