import { connectMongoDB } from "../../../lib/mongodb";
const Note = require('../../../models/Note')

connectMongoDB();

export default async function handler(req, res) {
    const { id } = req.query;

    try {
        const product = await Note.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product' });
    }
}
