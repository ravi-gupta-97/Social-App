import axios from "axios";

export const fetchPosts = async () => {

    const res = await axios.get('http://localhost:5000/posts')
        .catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
};

export const LogIn = async (signup, input) => {
    const res = await axios.post(`http://localhost:5000/user/${signup ? "signup" : "login"}`, {
        name: signup ? input.name : "",
        email: input.email,
        password: input.password
    }).catch((err) => console.log(err));
    if (res.status !== 201 && res.status !== 200) {
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
};

export const addPostData = async (input) => {
    const res = await axios.post('http://localhost:5000/posts/', {
        description: input.description,
        location: input.location,
        image: input.image,
        user: localStorage.getItem("userId")
    }).catch((err) => console.log(err));
    if (res.status !== 201) {
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
};

export const getPost = async (id) => {
    const res = await axios.get(`http://localhost:5000/posts/${id}/`).catch((err)=>console.log(err));
    if(res.status!==200){
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
};

export const updatePost = async(id,input) => {
    const res = await axios.put(`http://localhost:5000/posts/${id}/`,{
        description: input.description,
        location: input.location,
        image: input.image
    }).catch((err)=>console.log(err));
    if(res.status!==200){
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
};

export const deletePost = async(id) => {
    const res = await axios.delete(`http://localhost:5000/posts/${id}/`).catch((err)=>console.log(err));
    if(res.status!==200){
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
};

export const getUser = async() => {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`http://localhost:5000/user/${id}`).catch((err)=>console.log(err));
    if(res.status!==200){
        return console.log("error");
    }
    const resData = await res.data;
    return resData;
};
 