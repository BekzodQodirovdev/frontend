import React from "react";
import { Link } from "react-router-dom";
import { CloseIcon } from "../assets/header/close";
import { Search } from "./components/search";

export const Header = () => {
    return (
        <div>
            <div className="py-[10px] relative text-center bg-primary">
                <div className="text-white">
                    Sign up and get 20% off to your first order.{" "}
                    <Link to={"/"} className="underline">
                        Sign Up Now
                    </Link>
                    <div className="absolute right-[100px] top-[15px]">
                        <CloseIcon />
                    </div>
                </div>
            </div>
            <div className="container flex gap-[40px] py-[24px]">
                <div className="grow">
                    <Search />
                </div>
            </div>
        </div>
    );
};
