import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type :String,
        required: true,
    },
    mobileNo:{
        type :Number,
        required: true,
    },
    companyName:{
        type :String,
        required: true,
    },

},
{timestamps: true}
)

// const Client = mongoose.models.Clients || mongoose.model("clients",clientSchema)
// export default Client;

mongoose.models = {}
module.exports = mongoose.model("Clients",clientSchema);