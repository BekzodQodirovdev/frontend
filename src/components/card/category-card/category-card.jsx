import React from "react";

export const CategoryCard = ({ id, logo, title, sub_title }) => {
    return (
        <div className="flex gap-[20px] items-center">
            <div>
                <img src={logo} alt="img" />
            </div>
            <div>
                <h3 className="text-[15px] text-[#11142d] pb-[8px]">{title}</h3>
                <p className="max-w-[213px] text-[11px] text-[#aaa]">
                    {sub_title}
                </p>
            </div>
        </div>
    );
};
