const errorHandler = require("../Middlewares/errorHandler")
const mongooseModel =  require("../Models/Schema")
const asyncHandler = require('express-async-handler')
const getAllCollections = asyncHandler(async(req,res)=>{
    const AllCollection = await mongooseModel.find({})
    res.status(200).json({AllCollection})
    console.log('AllCollection', AllCollection)
    
})

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

})

const updateAllCollections = asyncHandler(async(req,res)=>{
    res.status(200).json({"message": "Update all Collection"})
})

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
