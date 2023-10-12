import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
const careerInfo = require('../../../models/careerInfo')



export async function POST(req) {
    try {
        await connectMongoDB();
        const { mcnumber } = await req.json();
        const user = await careerInfo.findOne({mcnumber}).select("_id");
        console.log("user:", user);
        return NextResponse.json({ user })
    } catch (error) {
        console.log(error);
    }
}