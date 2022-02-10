const userRouter = require("express").Router();
const { User, validate } = require("../models/User");
const bcrypt = require("bcrypt");
const {createUser,getAllUsers}= require( '../controllers/userController');

userRouter.post("/api/users",createUser); 
userRouter.get("/api/users",getAllUsers);


module.exports =userRouter;