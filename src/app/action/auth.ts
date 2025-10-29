'use server';

import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";

export async function signUpAction (formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;


    await auth.api.signUpEmail({ body: {
            email, password,
            name: email.split('@')[0],
            callbackURL: '/'
        } });
}

export async function signInAction (formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    await auth.api.signInEmail({ body: { email, password } });
    redirect('/');
}