import React from "react";
import StarRating from "./stars";
import arriwsImg1 from "../../../assets/arrivals/image.png";
import { useNavigate } from "react-router-dom";

export const ArrivalsCard = ({
    id,
    name,
    star,
    price,
    old_price,
    pratsent,
}) => {
    const navigate = useNavigate();
    const redirek = () => {
        navigate(`/${id}`);
    };

    return (
        <div onClick={redirek} className="cursor-pointer">
            <img src={arriwsImg1} alt="img" />
            <h4 className="pt-[16px] pb-[8px] font-bold text-start text-[20px] lowercase">
                {name}
            </h4>
            <StarRating rating={star} />
            <div className="flex gap-[10px] pt-[8px] items-center">
                <p className="text-start font-bold text-[24px]">$ {price}</p>
                {old_price ? (
                    <p className="line-through font-bold text-[24px] text-gray">
                        $ {old_price}
                    </p>
                ) : (
                    ""
                )}
                {pratsent ? (
                    <p className="py-[6px] px-[14px] text-[#ff3333] bg-[#ffebeb] rounded-[62px]">
                        {pratsent}
                    </p>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};
