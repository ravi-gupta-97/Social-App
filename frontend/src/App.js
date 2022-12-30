import { Route, Routes } from "react-router-dom";
import Login from "./auth-page/Login";
import Header from "./header/Header";
import Home from "./home/Home";
import Posts from "./posts/Posts";
import {useDispatch, useSelector} from 'react-redux';
import Add from "./posts/Add";
import Profile from "./profile/Profile";
import EditPost from "./posts/EditPost";
import { useEffect } from "react";
import { loginActions } from "./store";


function App() {
  const dispatch = useDispatch();
  const islogin = useSelector((state)=>state.login);
  useEffect(()=>{
    if(localStorage.getItem("userId")) {
      dispatch(loginActions.login());
    }
  },[dispatch]);

  return (
    <>
    <header>
      <Header />
    </header>
    <section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />        
        <Route path='/login' element={<Login />} />
        {islogin && <>
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<EditPost />} />
        <Route path='/profile' element={<Profile />} />    </>}
        

      </Routes>
    </section>
    </>
  );
}

export default App;
