import React from "react";
import gbImg from "../../assets/home/hero.jpg";
import browseImg1 from "../../assets/home/browse1.jpg";
import browseImg2 from "../../assets/home/browse2.png";
import browseImg3 from "../../assets/home/browse3.jpg";
import { homeData } from "../../data/data";
import { ProductCard } from "./components/product-card";

export const Home = () => {

    return (
        <div>
            <div
                className="bg-repeat bg-cover bg-center h-[716px]"
                style={{ backgroundImage: `url(${gbImg})` }}
            >
                <div className="container flex justify-end">
                    <div className="pt-[62px] pb-[37px] px-[40px] bg-[#ffffffb2] max-w-[640px] mt-[150px]">
                        <p className="font-semibold tracking-[0.19em]">
                            New Arrival
                        </p>
                        <p className="font-[700] text-[52px] text-[#b88e2f] max-w-[397px]">
                            Discover Our New Collection
                        </p>
                        <p className="max-w-[500px] font-medium text-[18px] text-[#333] mb-[45px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>
                        <button className="uppercase py-[25px] px-[75px] bg-[#b88e2f] text-[#fff] font-bold cursor-pointer">
                            BUY Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mb-[56px]">
                <h2 className="text-center font-bold text-[32px] text-[#333] mt-[56px]">
                    Browse The Range
                </h2>
                <p className="text-center font-normal text-[20px] text-[#666]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex gap-[20px] justify-center mt-[62px]">
                    <div>
                        <img src={browseImg1} alt="img" />
                        <p className="text-center mt-[30px] font-semibold text-[24px] text-[#333]">
                            Dining
                        </p>
                    </div>
                    <div>
                        <img src={browseImg2} alt="img" />
                        <p className="text-center mt-[30px] font-semibold text-[24px] text-[#333]">
                            Living
                        </p>
                    </div>
                    <div>
                        <img src={browseImg3} alt="img" />
                        <p className="text-center mt-[30px] font-semibold text-[24px] text-[#333]">
                            Bedroom
                        </p>
                    </div>
                </div>
            </div>
            <div className="container pb-[69px]">
                <h3 className="text-center font-bold text-[40px] text-[#3a3a3a] mb-[32px]">
                    Our Products
                </h3>
                <div className="grid grid-cols-4 gap-[32px] mb-[32px]">
                    {homeData.map((item) => (
                        <ProductCard
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
                <div className="text-center">
                    <button className="py-[12px] px-[78px] border text-[#b88e2f] border-[#b88e2f] cursor-pointer">
                        Show More
                    </button>
                </div>
            </div>
        </div>
    );
};
