import { connectMongoDB } from "../../../lib/mongodb";
import Client from "../../../models/addclient";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, mobileNo, companyName } = await req.json();
        await connectMongoDB();
        await Client.create({ name, email, mobileNo, companyName })

        return NextResponse.json({ message: "Client added" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured while client added" }, { status: 500 })
    }
}