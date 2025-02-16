import React from "react";
import star from "../../../assets/star.svg";

export const NewsCard = ({ id, img, title, sub_title, icons }) => {
    return (
        <div>
            <img src={img} alt="" />
            <h4 className="pt-[18px]">{title}</h4>
            <p className="pb-[10px]">{sub_title}</p>
            <div className="flex justify-between pt-[16px]">
                <div className="flex gap-[10px]">
                    <img src={star} alt="icon" />
                    <p>4.7</p>
                </div>
                {icons.length == 1 ? (
                    <div>
                        <img src={icons[0]} alt="icon" />
                    </div>
                ) : (
                    <div className="flex gap-[16px]">
                        <img src={icons[0]} alt="icon" />
                        <img src={icons[1]} alt="icon" />
                    </div>
                )}
            </div>
        </div>
    );
};
