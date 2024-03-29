const { mongo } = require("mongoose");
const asyncHandler = require("express-async-handler");
const mongooseUserModel = require("../Models/UserSchema");
const { UserValidationSchema } = require("../userValidation");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const AllUsers = await mongooseUserModel.find({});
    res.status(200).json({ AllUsers });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching All Users" });
  }
});

const getOneUser = asyncHandler(async (req, res) => {
  try {
    const OneUser = await mongooseUserModel.findById(req.params.id);
    if (!OneUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: `See User for ${req.params.id}`, OneUser });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single User" });
  }
});

const AddNewUser = asyncHandler(async (req, res) => {
  try {
    const { error, value } = UserValidationSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      console.log(error);
      const allErrors = error.details.map((e) => e.message);
      res.status(400).json({ error: allErrors });
    } else {
      const { Name, userName, emailId, Password } = value;

      const hashedPassword = await bcrypt.hash(Password, 10);

      const existingUser = await mongooseUserModel.findOne({ userName })
      if(existingUser){
        return res.status(400).send("User Already Exists, Please Login to Continue.")
      }

      const postUser = await mongooseUserModel.create({
        Name,
        userName,
        emailId,
        Password: hashedPassword,
        Favourites: [],
      });
      const authData = {
        userName: postUser.userName,
      };
      if(postUser){
        const access_token = jwt.sign(
          authData.userName,
          process.env.JWT_SECRET_KEY
          );
          console.log("access_token1: ", access_token);
          res.status(201).json({
          access_token: access_token,
          postUser: postUser,
        });
        }else{
          return res.status(400).send("Failed to create new user.")
        }
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send(`Internal Server Error. ${err}`);
  }
});

const LoginUser = asyncHandler(async (req, res) => {
  try {
    const {userName,Password,Name} = req.body
    const user = await mongooseUserModel.findOne({ userName})
    if(!user){
      return res.status(400).json({error: "Invalid Username...New User? Sign up."})
    }

    const isPasswordValid = await bcrypt.compare(Password,user.Password)
    if(!isPasswordValid){
      return res.status(401).json({ error: "Invalid username or password" })
    }
    const authData = {
      userName: user.userName,
    };
    const token = jwt.sign(authData, process.env.JWT_SECRET_KEY);
    res.status(200).json({
      access_token: token,
      user: {
        userName: user.userName,
        Password: user.Password,
        Name: user.Name
      },
    });

  } catch (error) {
    console.log('Error Logging In: ', error)
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const updateAllUsers = asyncHandler(async (req, res) => {
  try {
    const updateUsers = await mongooseUserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Update all Users", updateUsers });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error Updating All Users" });
  }
});

const updateOneUser = asyncHandler(async (req, res) => {
  try {
    const updateOneUser = await mongooseUserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: `Update User for ${req.params.id}`, updateOneUser });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error Updating One User" });
  }
});

const deleteOneUser = asyncHandler(async (req, res) => {
  try {
    const deleteUser = await mongooseUserModel.findByIdAndDelete(req.params.id);
    console.log(deleteUser);
    if (deleteUser) {
      res
        .status(200)
        .json({ message: `Delete User for ${req.params.id}`, deleteUser });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error Deleting User" });
  }
});

module.exports = {
  getAllUsers,
  getOneUser,
  AddNewUser,
  updateAllUsers,
  updateOneUser,
  deleteOneUser,
  LoginUser,
};
