const { mongo } = require("mongoose");
const asyncHandler = require("express-async-handler");
const mongooseUserModel = require("../Models/UserSchema");
const { UserValidationSchema } = require("../userValidation");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
    res.status(200).json({ message: `See User for ${req.params.id}`, OneUser });
    if (!OneUser) {
      return res.status(404).json({ message: "User not found" });
    }
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

      const postUser = await mongooseUserModel.create({
        Name,
        userName,
        emailId,
        Password,
        Favourites: [],
      });
      const authData = {
        userName: postUser.userName,
      };
      const access_token = jwt.sign(
        authData.userName,
        process.env.JWT_SECRET_KEY
      );
      console.log("access_token1: ", access_token);
      res.status(201).json({
        access_token: access_token,
        postUser: postUser,
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error adding new User" });
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
};
