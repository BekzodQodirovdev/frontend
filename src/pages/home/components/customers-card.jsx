import React from "react";
import StarRating from "./stars";

export const CustomersCard = ({ star, title, sub_title }) => {
    return (
        <div className="py-[28px] px-[32px] border border-[#e6e6e6] rounded-[20px]">
            <StarRating show={true} rating={star} />
            <h5 className="pt-[15px] font-bold text-[20px]">{title}</h5>
            <p className="pt-[12px] font-medium max-w-[336px]">{sub_title}</p>
        </div>
    );
};
