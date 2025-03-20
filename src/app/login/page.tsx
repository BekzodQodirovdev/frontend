"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
    const { data: session } = useSession();
    console.log(session);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {session ? (
                <>
                    <img
                        src={
                            session.user?.image ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        }
                        alt="User picture"
                        width={70}
                        height={70}
                        className="mb-4"
                    />
                    <p className="mb-4">Salom, {session.user?.name}!</p>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={() => signOut()}
                    >
                        Chiqish
                    </button>
                </>
            ) : (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => signIn("google")}
                >
                    Google bilan tizimga kirish
                </button>
            )}
        </div>
    );
}
