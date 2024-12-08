import dbConnect from '../../utils/db';
import User from '../../models/User';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await dbConnect();

    try {
        const users = await User.find().sort({ score: -1 }).limit(10);
        console.log('users', users);
        return NextResponse.json(users, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
} 