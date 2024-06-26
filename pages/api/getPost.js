import clientPromise from "../../lib/mongo";

export default async function getPost (req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("singhfreight");

        const movies = await db
            .collection("notes")
            .find({})
            .sort({ _id: 1 })
            .toArray();

        res.json(movies);
    } catch (e) {
        console.error(e);
    }
};
