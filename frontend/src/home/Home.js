import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box position="relative" width="100%" height="100vh" backgroundColor="#2ac1db">
      <img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" width={"100%"} height="70%" alt="travel" />
      <Box sx={{ position: "absolute", top: "0" }} width="100%" height="70%">
        <Typography fontFamily={"Dancing Script"} fontWeight="bold" variant="h4" paddingTop={"30px"} textAlign={"center"}>
          Welcome to the Social App
        </Typography>
        <Typography fontFamily={"Dancing Script"} fontWeight="bold" variant="h5" paddingTop={"39px"} textAlign={"center"} >
          This is the picture sharing App<br />
          Share your memories with people and be a part of our community
        </Typography>
      </Box>
      <Box width={"100%"} height="24%" display={"flex"} flexDirection="column">
        <Box margin={"auto"}>
          <Button variant="contained" sx={{ marginLeft: "20px" }} 
          LinkComponent={Link} to={'/posts'}
          >View Posts</Button>
        </Box>
      </Box>
      <Box width={"100%"} height="6%" sx={{backgroundColor:"#000"}}>
        <Typography paddingTop={"5px"} textAlign={"center"} color="#fff">CopyRight</Typography>
        </Box>
    </Box>
  )
}

export default Home
