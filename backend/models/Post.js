import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },date:{
        type:Date,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    likes:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }]
});
export default mongoose.model("Post",userSchema);