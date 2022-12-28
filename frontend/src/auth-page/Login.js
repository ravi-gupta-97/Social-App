import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogIn } from '../api/api';
import { loginActions } from '../store';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignupForm, setisSignupForm] = useState(false);
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignupForm) {
      LogIn(isSignupForm, inputs).then((data) => localStorage.setItem("userId", data.user._id)).then(() => { 
        dispatch(loginActions.login());
      navigate('/posts');
      }
      ).catch((err) => console.log(err));
      

    } else {
      LogIn(isSignupForm, inputs).then((data) => localStorage.setItem("userId", data.existingUser._id)).then(() =>{
         dispatch(loginActions.login());
         navigate('/posts')
      }
      ).catch((err) => console.log(err));
    }
  };

  return (
    <Box width="40%" margin="auto" marginTop={5} boxShadow={"5px 5px 10px #ccc"} borderRadius="10px">
      <form onSubmit={handleSubmit}>
        <Box width={"60%"} marginTop={"30px"} padding={5} display="flex" flexDirection="column" margin="auto">
          <Typography variant="h4" textAlign={"center"}>{isSignupForm ? "Sign Up" : "Login"}</Typography>

          {isSignupForm && <><FormLabel>Name</FormLabel>
            <TextField name="name" value={inputs.name} onChange={handleChange} margin="normal" /> </>}
          <FormLabel>Email</FormLabel>
          <TextField name="email" value={inputs.email} onChange={handleChange} margin="normal" />
          <FormLabel>Password</FormLabel>
          <TextField type={"password"} name="password" value={inputs.password} onChange={handleChange} margin="normal" />
          <Button sx={{ mt: 2, borderRadius: "10px" }} width="50%" type="submit" variant="contained">{!isSignupForm ? "logIn" : "SignUp"}</Button>
          <Button sx={{ mt: 2, borderRadius: "10px" }} onClick={() => setisSignupForm(!isSignupForm)} variant="contained">
            Change to {isSignupForm ? "logIn" : "SignUp"}
          </Button>

        </Box>
      </form>
    </Box>
  )
}

export default Login
