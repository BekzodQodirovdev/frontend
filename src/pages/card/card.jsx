import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemCom } from "./components/item";

export const Card = () => {
    const { products, totalPrice } = useSelector((state) => state.product);
    return (
        <div className="container">
            <div className="flex gap-[12px] items-center pb-[24px]">
                <Link to={"/"}>Home {">"}</Link>
                <Link to={"/card"}>Card</Link>
            </div>
            <p className="text-[40px] font-bold pb-[24px]">Your cart</p>
            <div className="flex gap-[20px]">
                <div className="flex flex-col py-[20px] px-[24px] border border-[#e6e6e6] rounded-[20px] gap-[24px]">
                    {products?.map((item) => (
                        <ItemCom key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
