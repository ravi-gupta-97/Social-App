import express from 'express';
import mongoose from 'mongoose';
import postRouter from './routes/post-routes.js';
import userRouter from './routes/user-routes.js';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
 const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/user',userRouter);
app.use('/posts',postRouter);

mongoose.connect(process.env.DBURL)
.then(()=>app.listen(PORT,()=>console.log(`Database Connected and Listening on port ${PORT}`)))
.catch((err)=>console.log(err));

