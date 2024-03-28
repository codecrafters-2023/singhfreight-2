import { connectMongoDB } from "../../../lib/mongodb";
const User = require('../../../models/addUser')

connectMongoDB();

export default async function handler(req, res) {
    const { id } = req.query;

    try {
        const load = await User.findById(id);

        if (!load) {
            return res.status(404).json({ message: 'User Detail not found' });
        }

        res.status(200).json(load);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching User Details' });
    }
}
