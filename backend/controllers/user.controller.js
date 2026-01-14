import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



export const register = async(req,res)=>{
    try{
// sign in ke lia required field jo body se aye ga ||

    const {firstName,lastName, email, password} = req.body;
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
// check its real email or not
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(!emailRegex.test(email)){
    return res.status(400).json({
        success:false,
        message:"Invalid Email"
    })
}
if(password.length < 6){
    return res.status(400).json({
        success:false,
        message:"password must be atleast 6 characters"
    })
}
// agar ye dono correct h to check email already exist or not !!

const existingUserByEmail = await User.findOne({email:email});

if(existingUserByEmail){
    return res.status(400).json({
        success:false,
        message:"Email already exists"
    })
}
// bcryptjs for password hashing
const hashPassword = await bcrypt.hash(password,10)
// salt pass to make 10/12 round complex


await User.create({
    firstName,
    lastName,
    email,
    password:hashPassword
})

return res.status(201).json({
    success:true,
    message:"Account created successfully !"
})

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to register"
        })
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required !!"
            });
        }



        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                 success:false,
            message:"Incorrect email or password !!"
            })
           
        }
const isPasswordValid = await bcrypt.compare(password,user.password)
if(!isPasswordValid){
    return res.status(400).json({
        success:false,
        message:"Invalid Credentials"
    })
}
// token generate krna h cookies me store kra h jb tk token rhe ga tb tk login rhega

const token = await jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:"1d"})
return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:"strict"}).json({
    success:true,
    message:`Welcome back ${user.firstName}`,
    user  //dispatch me set krna h
})



    } catch (error) {
         console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to login"
        })
    }
}

export const logout = async(_,res)=>{
try {
    return res.status(200).cookie("token", "" ,{maxAge: 0}).json({
        message:"Logout successfully !!"
    });
} catch (error) {
    
}

}