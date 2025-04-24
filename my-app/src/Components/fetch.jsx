import axios from 'axios';
import React, { useState } from 'react'

const fetch = () => {

    const [post, setPosts] = useState([]);

    const fetchPosts = async() {
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(res.data);
            console.log(res)
        }
    }
  return (
    <div>

    
    </div>
  )
}

export default fetch