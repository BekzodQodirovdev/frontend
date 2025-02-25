import React from "react";
import StarRating from "./stars";
import arriwsImg1 from "../../../assets/arrivals/image.png";

export const ArrivalsCard = () => {
    return (
        <div>
            <img src={arriwsImg1} alt="img" />
            <h4 className="pt-[16px] pb-[8px]">T-SHIRT WITH TAPE DETAILS</h4>
            <StarRating rating={3} />
            <p className="pt-[8px]">$120</p>
        </div>
    );
};
