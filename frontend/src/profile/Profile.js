import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../api/api'
import { loginActions } from '../store'

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user,setuser] = useState();
  
  useEffect(()=>{
    getUser().then((data) => setuser(data.user)).catch((err) => console.log(err));
  }, []);
  const handleLogout = () => {
      dispatch(loginActions.logout());
      localStorage.removeItem("userId");
      navigate('/');
  };

  return (
    <Box width="100%" height="100%" display={"flex"} flexDirection='column' justifyContent="center" alignItems={"center"} >
      <Typography variant="h4" fontFamily={"cursive"} width="100%" textAlign={"center"} sx={{ mt: "15px" }}>Profile</Typography>
     {user && <> <Typography variant='h6' sx={{ mt: "5px", ml: "10px" }}>Name : {user.name}</Typography>
      <Typography variant='h6' sx={{ mt: "5px", ml: "10px" }}>Email : {user.email}</Typography>
      <Button sx={{ ml: "10px", mt: "5px" }} variant='contained' onClick={handleLogout}>Logout</Button> </>}

    </Box>
  )
}

export default Profile
