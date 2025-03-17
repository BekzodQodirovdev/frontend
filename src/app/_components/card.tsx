"use client";

import Image from "next/image";
import heartImg from "../../../public/heart.svg";
import heartImgFill from "../../../public/heartFill.svg";

import { addHeart, delHeart } from "@/store/slices/heartSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import React from "react";
import { Spinner } from "./spiner";

export const ProductCard = ({
    product,
}: {
    product: {
        id: number;
        image: string;
        name: string;
        description: string;
        price: string;
    };
}) => {
    const heartData = useAppSelector((state) => state.heart.data);
    const dispatch = useAppDispatch();
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isLoaded) return <Spinner />;

    const findId = heartData.find((item) => item.id == product.id);
    return (
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
            <div className="cursor-pointer">
                {findId ? (
                    <Image
                        src={heartImgFill}
                        alt="heart icon"
                        width={25}
                        onClick={() => dispatch(delHeart({ id: product.id }))}
                    />
                ) : (
                    <Image
                        src={heartImg}
                        alt="heart icon"
                        width={25}
                        onClick={() => dispatch(addHeart({ id: product.id }))}
                    />
                )}
            </div>
            <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto"
            />
            <h3 className="text-center font-medium mt-2">{product.name}</h3>
            <p className="text-gray-500 text-sm text-center">
                {product.description}
            </p>
            <p className="text-center font-semibold text-lg text-green-600">
                {product.price} W
            </p>
            <button className="w-full mt-2 bg-[#F3F3F3] text-black py-2 rounded-md hover:bg-[#019e7f] cursor-pointer">
                Qo‘shish
            </button>
        </div>
    );
};
