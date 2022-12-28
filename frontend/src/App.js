import { Route, Routes } from "react-router-dom";
import Login from "./auth-page/Login";
import Header from "./header/Header";
import Home from "./home/Home";
import Posts from "./posts/Posts";
import {useSelector} from 'react-redux';
import Add from "./posts/Add";
import Profile from "./profile/Profile";
import EditPost from "./posts/EditPost";


function App() {
  const islogin = useSelector((state)=>state.login);
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
