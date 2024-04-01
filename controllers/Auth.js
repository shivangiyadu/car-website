const User=require("../models/User");
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt =require("jsonwebtoken");

const signup=async(req,res)=>{
    try{

    const {
        firstName,
        lastName,
        email,
        password,
        Confirm_Password

    }=req.body

    if(!firstName || !lastName || !email || !password || !Confirm_Password)
    {
        return res.status(403).json({
            success:false,
            message:"All Fields are required ",
        })
    }
    if(password!==Confirm_Password)
    {
        return res.status(400).json({
            success:false,
            message:"Password and Confirm Password Values do not match ,"
        });
    }
    const existingUser=await User.findOne({email});
    if(existingUser)
    {
        return res.status(400).json({
            success:false,
            message:"User is already registered "
        });
    }
    const hashedPassword=await bcrypt.hash(password,10);

    //created entry in DB 
    const user=await User.create({
        firstName,
        lastName,
        email,
        contactNumber,
        password:hashedPassword,
    });
    res.status(201).json({
        success: true,
        message: "User registered successfully",
    });
  }
 catch (error) {
   
    console.error("Error in signup:", error);
    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
}
}
module.exports = { signup };
