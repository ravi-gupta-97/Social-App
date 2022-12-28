import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    posts:[{
        type:mongoose.Types.ObjectId,
        ref:"Post"
    }]
});
export default mongoose.model("User",userSchema);