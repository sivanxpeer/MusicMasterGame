const authRouter = require("express").Router();
const { User } = require("../models/User");
const Joi = require("joi");
const bcrypt = require("bcrypt");

//signup 


authRouter.post("/api/auth", async (req, res) => {
    try {
        const {error} = validate(req.body);
        if(error){
            return res.status(400).send({message:error.details[0].message}); 
        }
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(401).send({message:"Invalid email or password"})
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(401).send({message:"Invalid email or password"})
        }
        const token = user.generateAuthToken();
        res.status(200).send({data:token,message:"Loggedin successfully"})

    }
    catch (err) {
        res.status(500).send({message:"Internal server error"})
    }
})

const validate =(data)=>{
    const schema = Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password"),
    })
    return schema.validate(data);
}

// authRouter.get("/api/users",async(req, res)=>{
   
// })

module.exports = {authRouter};