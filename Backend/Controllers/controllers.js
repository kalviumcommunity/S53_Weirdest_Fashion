const { mongo } = require("mongoose");
const mongooseModel = require("../Models/Schema");
const asyncHandler = require("express-async-handler");

const getOneCollection = asyncHandler(async(req,res)=>{
    res.status(200).json({"message": `See Collection for ${req.params.id}`})
})

const createCollection = asyncHandler(async(req,res)=>{
    const body = req.body
    const {Name, Event, Date_of_Event, Description, Image_Link} = body

    if(!Name || !Event || !Date_of_Event || !Description || !Image_Link){
        res.status(400).json({error: "All Fields are Mandatory"})
        throw new Error("All Fields are Mandatory")
    }
    const postCollection = await mongooseModel.create(body)
    res.status(201).json({"message": "Create Collection",postCollection})

<<<<<<< HEAD
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
=======
})

const updateAllCollections = asyncHandler(async(req,res)=>{
    res.status(200).json({"message": "Update all Collection"})
})
>>>>>>> 66069c1f8c2cfee7b20d32d1b9494a1914d3797d

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
