import dbConnect from '../../utils/db';
import User from '../../models/User';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect;

        const users = await User.find().sort({ score: -1 }).limit(10);
        console.log('users', users);
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        const errorMessage = (error as Error).message || 'An unknown error occurred';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
} 