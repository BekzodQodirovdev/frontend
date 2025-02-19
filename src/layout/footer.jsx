import React from "react";
import { NavLink } from "../components/ui/nav-link";

export const Footer = () => {
    return (
        <div className="container">
            <div className="flex justify-between pb-12">
                <div>
                    <p className="mb-[50px] font-[700] text-2xl">Funiro.</p>
                    <p className="font-[400] text-[#9f9f9f] max-w-2xs">
                        400 University Drive Suite 200 Coral Gables, FL 33134
                        USA
                    </p>
                </div>
                <div className="flex flex-col gap-12">
                    <p className="text-[#9f9f9f]">Links</p>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/shop"}>Shop</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}> Contact</NavLink>
                </div>
                <div className="flex flex-col gap-12">
                    <p className="text-[#9f9f9f]">Help</p>
                    <p>Payment Options</p>
                    <p>Returns</p>
                    <p>Privacy Policies</p>
                </div>
                <div>
                    <p className="text-[#9f9f9f] mb-[53px]">Newsletter</p>
                    <div className="flex gap-[11px]">
                        <input
                            type="text"
                            placeholder="Enter Your Email Address"
                            className="border-b"
                        />
                        <button className="border-b cursor-pointer">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#d4d4d4] py-[36px]">
                <h1>2023 furino. All rights reverved</h1>
            </div>
        </div>
    );
};
