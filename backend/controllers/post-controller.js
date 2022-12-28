import mongoose from 'mongoose';
import Post from '../models/Post.js';
import User from '../models/User.js';
export const getAllPosts = async (req, res) => {

    let posts;
    try {
        posts = await Post.find().populate("user");
    } catch (err) {
        console.log(err);
    }
    if (!posts) {
        return res.status(404).json({ message: "No post found" });
    }
    return res.status(200).json({ posts });

};

export const addPost = async (req, res) => {
    const { description, location, image, user } = req.body;
    if (!description || !location || !image) {
        res.status(400).json({ message: "Invalid data" });
    }
    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (err) {
        console.log(err);
    }
    if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
    }
    let post;
    try {
        // post = new Post({description, location, image, date: new Date(`${date}`), user });
        post = new Post({description, location, image, date: new Date(Date.now()), user });

        const session = await mongoose.startSession();
        session.startTransaction();
        existingUser.posts.push(post);
        await existingUser.save({ session });
        post = await post.save({ session });
        session.commitTransaction();
    } catch (err) {
        console.log(err);
    }
    if (!post) {
        return res.status(400).json({ message: "Internal Server Error" });
    }
    return res.status(201).json({ post });
};

export const getPostById = async (req, res) => {
    const id = req.params.id;
    let post;
    
    try{
        post = await Post.findById(id).populate("user");
    }catch(err){
        console.log(err);
    }
    if(!post){
        return res.status(404).json({message:"Post not found"});
    }
    return res.status(200).json({post});
};

export const updatePost = async (req, res) => {
    const id = req.params.id;
    const {description, image, location } = req.body;
    if(!description || !image || !location){
        return res.status(400).json({message:"Invalid data"});
    }
    let post;
    try{
        post = await Post.findByIdAndUpdate(id,{description, image, location});
    }catch(err){
        console.log(err);
    }
    if(!post){
        return res.status(400).json({message:"Unable to update"});
    }
    return res.status(200).json({message:"updated successfully"});
};

export const deletePost = async (req, res) => {
    const id = req.params.id;
    let post;
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        post = await Post.findById(id).populate("user");
        post.user.posts.pull(post);
        await post.user.save({session});
        post = await Post.findByIdAndRemove(id);
        session.commitTransaction();

    }catch(err){
        console.log(err);
    }
    if(!post){
        return res.status(400).json({message:"unable to delete"});
    }
    return res.status(200).json({message:"deleted successfully"});
};