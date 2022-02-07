const userRouter = require("express").Router();
const { User, validate } = require("../models/User");
const bcrypt = require("bcypy");

userRouter.post("/", async (req, res) => {

    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(200).send({ message: "user already exists" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password,salt)

        await new User({...req.body,password:hashPassword}).save();
        res.status(201).send({ message: "USer created"})

    } catch (err) {
        res.status(500).send({ message: "Internal server error"})
    }

})