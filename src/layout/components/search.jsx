import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { BasketIcon } from "../../assets/header/basket";
import { ProfileIcon } from "../../assets/header/profile";
import { useSelector } from "react-redux";

export const Search = () => {
    const { productCount } = useSelector((state) => state.product);

    return (
        <div className="flex items-center gap-[40px]">
            <Link to={"/"}>
                <img src={logo} alt="img" />
            </Link>
            <div className="flex gap-[24px]">
                <Link to={"/"}>Shop</Link>
                <Link to={"/"}>On Sale</Link>
                <Link to={"/"}>New Arrivals</Link>
                <Link to={"/"}>Brands</Link>
            </div>
            <div className="grow relative">
                <input
                    className="w-full bg-light-grey py-[13px] rounded-[62px] pl-[52px]"
                    placeholder="Search for products..."
                />
            </div>
            <div className="flex gap-[14px]">
                <div className="cursor-pointer relative">
                    <Link to={"/card"}>
                        <BasketIcon />
                    </Link>
                    {productCount ? (
                        <p className="w-[10px] h-[10px] rounded-[50%] absolute bg-red-500 top-[-8px] right-0"></p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="cursor-pointer">
                    <ProfileIcon />
                </div>
            </div>
        </div>
    );
};
