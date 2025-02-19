import React from "react";
import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ data }) => {
    const [heart, setHeart] = React.useState(false);
    const navigate = useNavigate();

    // const addCardFn = () => {
    //     const getAllData = getLocalData("cards") || [];
    //     const filter = getAllData.filter((item) => item?.id == data.id);
    //     if (filter.length == 0) {
    //         setLocalData("cards", [...getAllData, { id: data.id }]);
    //     }
    // };
    const addCardFn = () => {
        navigate(`/shop/${data.id}`);
    };

    return (
        <div className="bg-[#f4f5f7] relative group">
            <div className="relative">
                <img src={data.img} alt="product card img" />
                {data.discount ? (
                    <div className="absolute top-[24px] right-[24px] w-[48px] h-[48px] rounded-[50%] bg-[#E97171] text-center">
                        <p className="transform translate-y-[50%]">
                            {data.discount}
                        </p>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="pt-[16px] pl-[16px] pr-[20px] pb-[34px]">
                <p className="mb-[8px] font-semibold text-2xl text-[#3a3a3a]">
                    {data.title}
                </p>
                <p className="mb-[8px] font-medium text-[#898989]">
                    {data.description}
                </p>
                <div className="flex justify-between text-center items-center">
                    <p className="font-semibold text-2xl text-[#3a3a3a]">
                        Rp {data.price}
                    </p>
                    <del className="font-normal text-[#b0b0b0]">
                        {data.old_price ? data.old_price : null}
                    </del>
                </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-150 absolute bg-[#00000085] top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center">
                <button
                    onClick={addCardFn}
                    className="font-semibold text-[#b88e2f] bg-[#fff] py-[12px] px-[55px] cursor-pointer"
                >
                    Add to cart
                </button>
                <div className="flex gap-[20px] mt-[24px]">
                    <div className="flex gap-[4px] items-center cursor-pointer">
                        <CiShare2 className="text-[#fff]" />
                        <p className="text-[#fff] font-semibold">Share</p>
                    </div>
                    <div className="flex gap-[4px] items-center cursor-pointer">
                        <MdCompareArrows className="text-[#fff]" />
                        <p className="text-[#fff] font-semibold">Compare</p>
                    </div>
                    <div
                        onClick={() => setHeart(!heart)}
                        className="flex gap-[4px] items-center cursor-pointer"
                    >
                        {heart ? (
                            <FaHeart className="text-[#f00] " />
                        ) : (
                            <FaRegHeart className="text-[#fff] " />
                        )}
                        <p className="text-[#fff] font-semibold">Like</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
