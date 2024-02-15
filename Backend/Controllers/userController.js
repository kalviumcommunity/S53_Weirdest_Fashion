const { mongo } = require("mongoose");
const asyncHandler = require("express-async-handler");
const mongooseUserModel = require("../Models/UserSchema");

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
    res.status(200).json({ message: `See User for ${req.params.id}`,OneUser });
    if (!OneUser) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single User" });
  }
});

const AddNewUSer = asyncHandler(async (req, res) => {
  try {
    const body = req.body;
    console.log("body", body);
    const { Name, userName, emailId, Password, Likes} = body;

    if (!Name || !userName || !emailId || !Password) {
      res.status(400).json({ error: "All Fields are Mandatory" });
      throw new Error("All Fields are Mandatory");
    }
    const postUser = await mongooseUserModel.create({
      Name,
      userName,
      emailId,
      Password,
    });
    res.status(201).json({ message: "Create User", postUser });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error adding new User" });
  }
});

const updateAllUsers = asyncHandler(async (req, res) => {
  try {
    const updateUsers = await mongooseUserModel.findByIdandUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Update all Users", updateUsers });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error Updating All Users" });
  }
});

const updateOneUser = asyncHandler(async (req, res) => {
  try {
    const updateOneUser = await mongooseUserModel.findByIdandUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: `Update User for ${req.params.id}`,updateOneUser });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error Updating One User" });
  }
});

const deleteOneUser = asyncHandler(async (req, res) => {
    try {
        const deleteUser = await mongooseUserModel.findByIdandDelete(req.params.id)
        if(!deleteUser){
            res.status(200).json({ message: `Delete User for ${req.params.id}`,deleteUser });
        }
    } catch (error) {
        console.log('error', error)
        res.status(500).json({ message: "Error Deleting User" });
    }
});

module.exports = {
    getAllUsers,
    getOneUser,
    AddNewUSer,
    updateAllUsers,
    updateOneUser,
    deleteOneUser,
};
