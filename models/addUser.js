import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    companyName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    powerUnit: {
        type: String,
    },
    dryVans: {
        type: String,
    },
    reefers: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    }
},
    {
        timestamps: true  // to add createdAt and updatedAt fields in the schema.
    })


mongoose.models = {}
module.exports = mongoose.model("User", noteSchema);