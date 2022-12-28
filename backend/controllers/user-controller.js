import User from '../models/User.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"Invalid data"});
    }
    let user;
    try {
        user = await User.findOne({ email });
    } catch (err) {
        console.log(err);
    }
    if(user){
        return res.status(400).json({message:"User Already Present"});
    }
    const hashedPassword = bcryptjs.hashSync(password);
    user = new User({name,email,password:hashedPassword});
    await user.save();
    if(!user){
        return res.status(400).json({message:"Unable to add User"});
    }
    return res.status(201).json({user});
};

export const login = async( req, res ) => {
    const { email, password } = req.body;
    if( !email || !password ){
        return res.status(400).json({message:"Invalid data"});
    }
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }
    catch(err){
        console.log(err);
    };
    if(!existingUser){
        return res.status(400).json({message:"Invalid User"});
    }
    const isCorrectPassword = bcryptjs.compareSync(password,existingUser.password);
    if(!isCorrectPassword){
        return res.status(400).json({message:"Invalid Credential"});        
    }
    return res.status(200).json({existingUser, message:"Login Successful"});
};

export const getUser = async(req, res) => {
    const id = req.params.id;
    let user;
    try{
        user = await User.findById(id);
        
    }catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(400).json({message:"user not found"});
    }
    return res.status(200).json({user});
};

