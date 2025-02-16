import React from "react";

export const RukunlarCard = ({ id, img, title }) => {
    return (
        <div className="relative">
            <img src={img} alt="img" />
            <p className="absolute bottom-2 left-2 text-white">{title}</p>
        </div>
    );
};
