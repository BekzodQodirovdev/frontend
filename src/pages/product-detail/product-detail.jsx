import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { newArrivals } from "../home/data/data";

import img1 from "../../assets/product-detail/item1.png";
import img2 from "../../assets/product-detail/item2.png";
import img3 from "../../assets/product-detail/item3.png";
import StarRating from "../home/components/stars";

export const ProductDetail = () => {
    const { id } = useParams();
    const [state, setState] = React.useState();
    const [mainImg, setMainImg] = React.useState(img2);
    const [count, setCount] = React.useState(1);
    useEffect(() => {
        let getdata = newArrivals.filter((item) => item.id == id);
        if (!getdata) {
            getdata = topSelling.filter((item) => item.id == id);
        }
        setState(getdata[0]);
    }, []);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className="container">
            <div className="h-[1px] w-full bg-[#e6e6e6]"></div>
            <div className="flex gap-[12px] pb-[36px] pt-[24px]">
                <p className="text-[#666666]">Home {">"}</p>
                <p className="text-[#666666]">Shop {">"}</p>
                <p className="text-[#666666]">Men {">"}</p>
                <p>{state?.name}</p>
            </div>
            <div className="flex">
                <div className="flex flex-col justify-between pr-[14px]">
                    <div
                        onClick={() => setMainImg(img1)}
                        className="w-[152px] h-[167px] cursor-pointer"
                    >
                        <img src={img1} alt="img" />
                    </div>
                    <div
                        onClick={() => setMainImg(img2)}
                        className="w-[152px] h-[167px] cursor-pointer"
                    >
                        <img src={img2} alt="img" />
                    </div>
                    <div
                        onClick={() => setMainImg(img3)}
                        className="w-[152px] h-[167px] cursor-pointer"
                    >
                        <img src={img3} alt="img" />
                    </div>
                </div>
                <div className="w-[444px] h-[582px] mr-[40px] rounded-[30px] overflow-hidden">
                    <img
                        src={mainImg}
                        alt="img"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="">
                    <h3 className="font-bold text-[35px] uppercase h-[48px]">
                        {state?.name}
                    </h3>
                    <StarRating rating={state?.star} />
                    <div className="flex gap-[12px] items-center pt-[14px]">
                        <p className="font-bold text-[32px]">{state?.price}</p>
                        {state?.old_price ? (
                            <p className="font-bold text-[32px] text-gray line-through">
                                $300
                            </p>
                        ) : (
                            ""
                        )}
                        {state?.pratsent ? (
                            <p className="font-medium text-[#f33] py-[6px] px-[14px] bg-[#ffebeb] rounded-[62px]">
                                -40%
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <p className="max-w-[590px] font-normal pt-[20px] pb-[24px]">
                        This graphic t-shirt which is perfect for any occasion.
                        Crafted from a soft and breathable fabric, it offers
                        superior comfort and style.
                    </p>
                    <div className="w-full h-[1px] bg-[#e6e6e6]"></div>
                    <p className="pt-[24px] text-[#666666]">Select Colors</p>
                    <div className="flex gap-[16px] pt-[16px] pb-[24px]">
                        <div className="w-[37px] h-[37px] rounded-[50%] bg-[#4F4631] cursor-pointer"></div>
                        <div className="w-[37px] h-[37px] rounded-[50%] bg-[#314F4A] cursor-pointer"></div>
                        <div className="w-[37px] h-[37px] rounded-[50%] bg-[#31344F] cursor-pointer"></div>
                    </div>
                    <div className="w-full h-[1px] bg-[#e6e6e6]"></div>
                    <p className="pt-[24px] text-[#666666]">Choose Size</p>
                    <div className="flex gap-[12px] pt-[16px] pb-[24px]">
                        <button className="py-[12px] px-[24px] rounded-[62px] bg-[#f0f0f0] hover:bg-[#000000] hover:text-[#fff] cursor-pointer duration-300">
                            Small
                        </button>
                        <button className="py-[12px] px-[24px] rounded-[62px] bg-[#f0f0f0] hover:bg-[#000000] hover:text-[#fff] cursor-pointer duration-300">
                            Medium
                        </button>
                        <button className="py-[12px] px-[24px] rounded-[62px] bg-[#f0f0f0] hover:bg-[#000000] hover:text-[#fff] cursor-pointer duration-300">
                            Large
                        </button>
                        <button className="py-[12px] px-[24px] rounded-[62px] bg-[#f0f0f0] hover:bg-[#000000] hover:text-[#fff] cursor-pointer duration-300">
                            X-Large
                        </button>
                    </div>
                    <div className="w-full h-[1px] bg-[#e6e6e6]"></div>
                    <div className="flex justify-between pt-[24px]">
                        <div className="flex py-[16px] px-[20px] gap-[38px] bg-[#f0f0f0] rounded-[62px]">
                            <button
                                onClick={decrement}
                                className="cursor-pointer"
                            >
                                -
                            </button>
                            <span>{count}</span>
                            <button
                                onClick={increment}
                                className="cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                        <button className="py-[15px] px-[157px] text-[#fff] bg-[#000] rounded-[62px]">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
