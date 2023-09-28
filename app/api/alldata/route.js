import { NextResponse } from "next/server";
const Note = require('../../../models/Note')
import {connectMongoDB} from '../../../lib/mongodb'

export async function GET(request) {
    try {
        await connectMongoDB();
        const data = await Note.find();
        return NextResponse.json({data});
    } catch (error) {
        console.log(error);
    }
}