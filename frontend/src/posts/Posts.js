import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { fetchPosts } from '../api/api'

const Posts = () => {
  const [ posts, setposts ] = useState();
  useEffect(()=>{
    fetchPosts().then((data)=>setposts(data.posts)).catch((err)=>console.log(err));
  },[]);
  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" backgroundColor="#2ac1db">
          { posts && posts.map((item,index)=><Post 
          key={index}
          description={item.description}
          location={item.location}
          image={item.image}
          date={new Date(`${item.date}`).toLocaleDateString()}
          user={item.user}
          id={item._id}

          />)}
    </Box>
    
   
  )
}

export default Posts
