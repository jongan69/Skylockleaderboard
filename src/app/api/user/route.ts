import dbConnect from '../../utils/db';
import User from '../../models/User';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();

    try {
        const { username } = await req.json();
        const user = new User({ username });
        await user.save();
        return NextResponse.json(user, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
} 