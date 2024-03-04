const mongoose = require('mongoose')

const collectionSchema = mongoose.Schema({
    "Name": {type: String,required: [true, "Please Add Name of Person"]},
    "Event": {type: String,required: [true, "Please Add Name of Event"]},
    "Date_Of_Event": {type: String,required: [true, "Please Add Date of Event"]},
    "Description": {type: String,required: [true, "Please Add Description"]},
    "Image_Link": {type: String,required: [true, "Please Add Image Link"]}
})

const mongooseModel = mongoose.model("maindatas", collectionSchema)

module.exports = mongooseModel