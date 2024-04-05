import mongoose from "mongoose";
import User from '../../models/User'

async function handler(req, res) {
    if (req.method != "POST") {
        return res.status(405).end()
    }

    try {
        const { name, email, password } = req.body;
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
        }).then(() => console.log("DB connected"));
        let newUser = new User({ name, email, password });
        await newUser.save();
        console.log(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal error" });
    } finally {
        mongoose.connection.close();
    }
}

export default handler;