"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <p>Salom, {session.user?.name}!</p>
      ) : (
        <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
          Tizimga kirish
        </Link>
      )}
    </div>
  );
}
