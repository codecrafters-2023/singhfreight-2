import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    reffNo: {
        type: String,
    },
    PcityName: {
        type: String,
    },
    PState: {
        type: String,
    },
    PZipCode: {
        type: String,
    },
    Pdate: {
        type: String,
    },
    PTimeOne: {
        type: String,
    },
    PTimeTwo: {
        type: String,
    },
    DcityName: {
        type: String,
    },
    DState: {
        type: String,
    },
    DZipCode: {
        type: String,
    },
    Ddate: {
        type: String,
    },
    DTimeOne: {
        type: String,
    },
    DTimeTwo: {
        type: String,
    },
    price: {
        type: String,
    },
    equipment: {
        type: String,
    },
    weight: {
        type: String,
    },
    distance: {
        type: String,
    },
    commodity: {
        type: String,
    },
    checkedvalues: {
        type: Array,
    },
    loadInfo: {
        type: String,
    },
    show: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,
    })


mongoose.models = {}
module.exports = mongoose.model("loads", noteSchema);
