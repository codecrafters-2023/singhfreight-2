import mongoose, { Schema } from "mongoose";

const careerSchema = new Schema({
    mcnumber: {
        type: String,
        required: true,
    },
    insuranceExpiry: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
    }
},
{
    timestamps : true  // to add createdAt and updatedAt fields in the schema.
})


mongoose.models = {}
module.exports = mongoose.model("careerInfo",careerSchema);