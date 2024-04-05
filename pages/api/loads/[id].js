import { connectMongoDB } from "../../../lib/mongodb";
const Note = require('../../../models/Note')

connectMongoDB();

export default async function handler(req, res) {
    const { id } = req.query;

    try {
        const load = await Note.findById(id);

        if (!load) {
            return res.status(404).json({ message: 'load Detail not found' });
        }

        res.status(200).json(load);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching load Details' });
    }
}
