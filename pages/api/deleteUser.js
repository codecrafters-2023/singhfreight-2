import clientPromise from "../../lib/mongo";
import { ObjectId } from "mongodb";

export default async function deletePost (req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("singhfreight");
        const { id } = req.query;

        const post = await db.collection("users").deleteOne({
            _id: new ObjectId(id),
        });

        res.json(post);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};