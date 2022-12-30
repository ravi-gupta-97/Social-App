import express from 'express';
import { addPost, deletePost, getAllPosts, getPostById, likePost, unlikePost, updatePost } from '../controllers/post-controller.js';
const postRouter = express.Router();

postRouter.get('/',getAllPosts);
postRouter.post('/',addPost);
postRouter.get('/:id',getPostById);
postRouter.put('/:id',updatePost);
postRouter.delete('/:id',deletePost);
postRouter.put('/like/:id',likePost);
postRouter.put('/unlike/:id',unlikePost);

export default postRouter;