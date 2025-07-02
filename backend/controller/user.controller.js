import User from "../models/user.model.js";

const signup = async (req,res)=> {
    try{
        const {name,email,password,confirmPassword} = req.body;
        if(password!=confirmPassword)
        {
            res.status(400).json({message: "password do not match"});
        }
        const user = await User.findOne({email});
        if(user)
        {
                       res.status(400).json({message: "Uer Alredy Exists"});;

        }

        const newUser = await new User({
            name,
            email,
            password,
        });
        newUser.save().then(()=>{
            res.status(200).json({message: " register successfully"});
        })
    }
    catch(error)
    {
        res.status(500).json({message: "Server Error"});
    }
}

export default signup;