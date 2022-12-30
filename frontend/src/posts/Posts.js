import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { fetchPosts } from '../api/api'


const Posts = () => {
  const [Posts, setPosts] = useState();


  useEffect(() => {

    let interval = setInterval(() => {
      fetchPosts().then((data) => {
        setPosts(data.posts)
      }).catch((err) => console.log(err));
    }, 1000);
    return () => {
      clearInterval(interval);
    };

  }, []);



  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" backgroundColor="#2ac1db">
      {Posts && Posts.map((item, index) => <Post
        key={index}
        description={item.description}
        location={item.location}
        image={item.image}
        date={new Date(`${item.date}`).toLocaleDateString()}
        user={item.user}
        likes={item.likes}
        id={item._id}


      />)}
    </Box>


  )
}

export default Posts
