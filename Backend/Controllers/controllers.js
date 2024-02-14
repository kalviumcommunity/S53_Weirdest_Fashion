const { mongo } = require("mongoose");
const mongooseModel = require("../Models/Schema");
const asyncHandler = require("express-async-handler");

const getAllCollections = asyncHandler(async (req, res) => {
  try {
    const AllCollection = await mongooseModel.find({});
    res.status(200).json(AllCollection);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching All Collections" });
  }
});

const getOneCollection = asyncHandler(async (req, res) => {
  try {
    const OneCollection = await mongooseModel.findById(req.params.id);
    res.status(200).json({ message: `See Collection for ${req.params.id}`,OneCollection });
    if (!OneCollection) {
      return res.status(404).json({ message: "Hacks not found" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single Collection" });
  }
});

const createCollection = asyncHandler(async (req, res) => {
  try {
    const body = req.body;
    console.log("body", body);
    const { Id, Name, Event, Date_Of_Event, Description, Image_Link } = body;

    if (!Name || !Event || !Date_Of_Event || !Description || !Image_Link) {
      res.status(400).json({ error: "All Fields are Mandatory" });
      throw new Error("All Fields are Mandatory");
    }
    const postCollection = await mongooseModel.create({
      Id,
      Name,
      Event,
      Date_Of_Event,
      Description,
      Image_Link,
    });
    res.status(201).json({ message: "Create Collection", postCollection });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error creating new Collection" });
  }
});

const updateAllCollections = asyncHandler(async (req, res) => {
  try {
    const updateCollection = await mongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Update all Collection", updateCollection });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error Updating Collection" });
  }
});

const updateOneCollection = asyncHandler(async (req, res) => {
  try {
    const updateOneCollection = await mongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({
        message: `Update Collection for ${req.params.id}`,
        updateOneCollection,
      });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error Updating One Collection" });
  }
});

const deleteCollection = asyncHandler(async (req, res) => {
  try {
    const deleteCollection = await mongooseModel.findByIdAndDelete(
      req.params.id
    );
    if (!deleteCollection) {
      res
        .status(200)
        .json({
          message: `Delete Collection for ${req.params.id}`,
          deleteCollection,
        });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error Deleting Collection" });
  }
});

module.exports = {
  getAllCollections,
  getOneCollection,
  createCollection,
  updateAllCollections,
  updateOneCollection,
  deleteCollection,
};
