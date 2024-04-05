import { connectMongoDB } from '../../lib/mongodb';
import Client from '../../models/addclient';

async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).end()
    }

    try {
        const { id } = req.query
        const { name, email, mobileNo, companyName } = req.body;
        await connectMongoDB();
        const updateNote = await Client.findByIdAndUpdate(id, { name, email, mobileNo, companyName });
        res.status(200).json(updateNote)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "not Updated" })
    }
}

export default handler;