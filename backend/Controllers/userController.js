const userModel=require('../Models/userModel.js');

const signUpController = async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).send({
                success:false,
                message:"Please give valid details"
            })
        }

        const oldUser = await userModel.findOne({email:email});
        if(oldUser){
            console.log(oldUser);
            return res.status(200).send({
                success:false,
                message:"Email already registered"
            })
        }

        const user = await new userModel({name,email,password}).save();
        res.status(200).send({
            success:true,
            message:"User registered successfully",
            user:{
                id:user._id,
            }
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"Internal server error"
        })
    }
}

const loginController = async (req,res)=>{
    try{
        const {email,password}=req.body;

    if(!email||!password){
        return res.status(400).send({
            success:false,
            message:"Enter valid details"
        })
    }

    const user = await userModel.findOne({email:email});
    if(!user){
        return res.status(400).send({
            success:false,
            message:"Email does not exists"
        })
    }

    if(user){
        if(password!==user.password){
            return res.status(400).send({
                success:false,
                message:"Invalid password"
            })
        }
    }

    res.status(200).send({
        success:true,
        message:"Login Successfull",
        user:{
            id:user._id,
        }
    })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"Internal server error"
        })
    }
}
module.exports = {signUpController,loginController};