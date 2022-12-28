import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addPostData } from '../api/api';

const Add = () => {
  const navigate = useNavigate();
  const [ inputs, setinputs ] = useState({
    description:"",
    location:"",
    image:""
  });
  const handleChange = (e) => {
    setinputs((prevState)=>({
      ...prevState,[e.target.name]:e.target.value
    }))
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPostData(inputs).then(()=>navigate('/posts')).catch((err)=>console.log(err));
  };
  return (
    <Box width="100%" display={"flex"} flexDirection="column">
      <Box display={"flex"} margin="auto" >
        <Typography variant="h4" sx={{marginBottom:"10px",marginTop: "20px", fontFamily: "cursive" }}>Add Post</Typography>
      </Box >
      <form onSubmit={handleSubmit}>
        <Box width="60%" display={"flex"} margin="auto" marginTop="10px" flexDirection="column">
          <FormLabel >Image</FormLabel>
          <TextField margin="normal" variant="standard" name="image" value={inputs.image} onChange={handleChange} />
          <FormLabel>Location</FormLabel>
          <TextField margin="normal" variant="standard" name="location" value={inputs.location} onChange={handleChange} />
          <FormLabel >Description</FormLabel>
          <TextField margin="normal" variant="standard" name="description" value={inputs.description} onChange={handleChange} />
          <Button variant="contained" type="submit" sx={{margin:"auto",marginTop:"15px",width:"50%" }}> Submit</Button>
        </Box>
      </form>
    </Box >
  )
}

export default Add
