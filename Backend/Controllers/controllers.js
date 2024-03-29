const { mongo } = require("mongoose");
const mongooseModel = require("../Models/Schema");
const asyncHandler = require("express-async-handler");
const DataSchema = require("./../server");
const { DataValidationSchema } = require("../userValidation");

const getAllCollections = asyncHandler(async (req, res) => {
  try {
    const AllCollection = await mongooseModel.find({});
    console.log('AllCollection', AllCollection)
    res.status(200).json(AllCollection);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching All Collections" });
  }
});

const getOneCollection = asyncHandler(async (req, res) => {
  try {
    const OneCollection = await mongooseModel.findById(req.params.id);
    res
      .status(200)
      .json({ message: `See Collection for ${req.params.id}`, OneCollection });
    if (!OneCollection) {
      return res.status(404).json({ message: "Collection not found" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single Collection" });
  }
});

const createCollection = asyncHandler(async (req, res) => {
  try {
    const { error, value } = DataValidationSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      console.log(error)
      const allErrors = error.details.map(e=>e.message)
      res.status(400).json({ error: allErrors });
    } else {
      console.log(value);
      const { Name, Event, Date_Of_Event, Description, Image_Link,created_by } = value;

      const postCollection = await mongooseModel.create({
        Name,
        Event,
        Date_Of_Event,
        Description,
        Image_Link,
        created_by
      });
      res.status(201).json({ message: "Create Collection", postCollection });
    }
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
    const updatedOneCollection = await mongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: `Update Collection for ${req.params.id}`,
      updatedOneCollection,
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
      return res.status(404).json({
        message: `Collection not found for ${req.params.id}`,
      });
    }
    res.status(200).json({
      message: `Deleted Collection for ${req.params.id}`,
      deleteCollection,
    });
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
