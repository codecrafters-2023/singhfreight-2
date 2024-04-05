import mongoose from "mongoose";
const career = require('../../models/careerInfo');


async function handler(req, res) {
    if (req.method != "POST") {
        return res.status(405).end()
    }

    try {
        const { mcnumber, insuranceExpiry, companyName } = req.body;
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
        }).then(() => console.log("DB connected"));
        let newNote = new career({ mcnumber, insuranceExpiry, companyName });
        await newNote.save();
        console.log(newNote);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal error" });
    } finally {
        mongoose.connection.close();
    }
}

export default handler;