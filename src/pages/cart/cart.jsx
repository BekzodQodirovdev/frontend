import React from "react";
import { useParams } from "react-router-dom";
import { homeData as dataProduct } from "../../data/data.js";
import { NavLink } from "../../components/ui/nav-link.jsx";

export const Cart = () => {
    const { id } = useParams();
    const oneData = dataProduct.filter((item) => item.id == id);

    return (
        <>
            <div className="py-38px bg-[#f9f1e7]">
                <div className="container">
                    <h1>
                        <NavLink to={"/"}>Home</NavLink> &gt;{" "}
                        <NavLink to={"/shop"}>Shop</NavLink> &gt; |{" "}
                        {oneData[0]?.title || id}
                    </h1>
                </div>
            </div>
            <div>
                <div className="container">
                    {oneData.length > 0 ? (
                        <div>
                            <img src={oneData[0].img} alt={oneData[0].title} />
                            <h2>{oneData[0].title}</h2>
                            <p>{oneData[0].description}</p>
                        </div>
                    ) : (
                        <h2>Mahsulot topilmadi</h2>
                    )}
                </div>
            </div>
        </>
    );
};
