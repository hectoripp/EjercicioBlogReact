import React from 'react'
import posts from '../data/posts'
import { useParams, Navigate } from 'react-router-dom'

const Post = () => {
    const {id} = useParams()
console.log("El id es: ... "+id)
  return (
    <div>

        {
            posts[id-1]?
            <div>
                  <h3>Lenguaje de Programación {posts[id-1].title}</h3>
        <p>{posts[id-1].content}</p>
            </div>
            :
            <div>
                <Navigate to="/Error404" />
            </div>
        }
        
      

    </div>
  )
}

export default Post