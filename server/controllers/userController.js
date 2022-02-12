const  {User, validate}  = require('../models/User');
const bcrypt = require("bcrypt");


const createUser = async (req, res) => {
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
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "USer created" })

    } catch (err) {
        res.status(500).send({ message: "Internal server error" })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        // console.log(users)
        res.status(200).send(users);
    }
    catch (err) {
        console.log("check")
        res.status(400).send(err.message);
    }
}

const login=async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateAuthToken();
		res.send({ user, token });
	} catch (e) {
		res.status(400).send(e.message);
	}
}


module.exports = {
    createUser,
    getAllUsers,
    login
}