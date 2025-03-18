import Link from "next/link";
import React from "react";

export const Header = () => {
    return (
        <div className="container">
            <div className="flex justify-center gap-[40px] py-[20px]">
                <Link href={"/register"}>Register</Link>
                <Link href={"/login"}>Login</Link>
                <Link href={"/profile"}>Profile</Link>
            </div>
        </div>
    );
};
