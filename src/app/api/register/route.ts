
import { signUpAction } from '@/app/action/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { email, password } = await req.json();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    try {
        await signUpAction(formData);
        return NextResponse.json({ success: true });
    } catch (err: any) {
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}
