
const { mongo } = require("mongoose");
const mongooseModel = require("../Models/Schema");
const asyncHandler = require("express-async-handler");
const DataSchema = require("./../server");
const { DataValidationSchema } = require("../userValidation");

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
    res
      .status(200)
      .json({ message: `See Collection for ${req.params.id}`, OneCollection });
    if (!OneCollection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    const postCollection = await mongooseModel.create(body)
    res.status(201).json({"message": "Create Collection",postCollection})

    
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

const updateOneCollection = asyncHandler(async(req,res)=>{
    res.status(200).json({"message": `Update Collection for ${req.params.id}`})
})

const deleteCollection = asyncHandler(async(req,res)=>{
    res.status(200).json({"message": `Delete Collection for ${req.params.id}`})
})

module.exports = {
    getAllCollections,
    getOneCollection,
    createCollection,
    updateAllCollections,
    updateOneCollection,
    deleteCollection
}
