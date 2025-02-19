import { CgSearch } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import React from "react";
import logoImg from "../assets/logo.svg";
import { NavLink } from "../components/ui/nav-link";

export const Header = () => {
    return (
        <div className="container">
            <div className="flex items-center justify-between py-[30px]">
                <div className="flex gap-1.5">
                    <img src={logoImg} alt="logo" />
                    <p className="font-[700] text-[32px] text-black">Furniro</p>
                </div>
                <div className="flex gap-[75px]">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/shop"}>Shop</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}> Contact</NavLink>
                </div>
                <div className="flex gap-[45px]">
                    <FaRegUser className="size-[28px] cursor-pointer" />
                    <CgSearch className="size-[28px] cursor-pointer" />
                    <FaRegHeart className="size-[28px] cursor-pointer" />
                    <SlBasket className="size-[28px] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};
