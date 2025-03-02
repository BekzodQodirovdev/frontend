import React from "react";
import { VercacePartner } from "../../assets/partners/vercace";
import { ZaraPartner } from "../../assets/partners/zara";
import { GucciPartner } from "../../assets/partners/gucci";
import { PradaPartner } from "../../assets/partners/prada";
import { CalvinPartner } from "../../assets/partners/calvin";
import { ArrivalsCard } from "./components/arrivals-card";

import topLeft from "../../assets/dress-style/top-left.png";
import topRight from "../../assets/dress-style/top-right.png";
import bottmonLeft from "../../assets/dress-style/bottm-left.png";
import bottmonRight from "../../assets/dress-style/bottmon-right.png";
import { LeftIcon } from "../../assets/left";
import { RightIcon } from "../../assets/right";
import { CustomersCard } from "./components/customers-card";
import { newArrivals, topSelling } from "./data/data";

export const Home = () => {
    return (
        <>
            <section className="bgImg">
                <div className="container">
                    <h2 className="font-[700] text-[64px] max-w-[577px] pt-[103px]">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h2>
                    <p className="max-w-[545px] font-[400] leading-[137%] py-[32px]">
                        Browse through our diverse range of meticulously crafted
                        garments, designed to bring out your individuality and
                        cater to your sense of style.
                    </p>
                    <button className="bg-primary py-[15px] px-[67px] text-white rounded-[62px] cursor-pointer">
                        Shop Now
                    </button>
                    <div className="flex gap-[32px] pb-[116px] pt-[48px]">
                        <div>
                            <p className="font-[700] text-[40px]">200+</p>
                            <p className="font-[400] leading-[137%] text-gray">
                                International Brands
                            </p>
                        </div>
                        <div className="bg-gray w-[1px]"></div>
                        <div>
                            <p className="font-[700] text-[40px]">2,000+</p>
                            <p className="font-[400] leading-[137%] text-gray">
                                High-Quality Products
                            </p>
                        </div>
                        <div className="bg-gray w-[1px]"></div>
                        <div>
                            <p className="font-[700] text-[40px]">30,000+</p>
                            <p className="font-[400] leading-[137%] text-gray">
                                Happy Customers
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary">
                <div className="container">
                    <div className="flex py-[42px] justify-between">
                        <VercacePartner />
                        <ZaraPartner />
                        <GucciPartner />
                        <PradaPartner />
                        <CalvinPartner />
                    </div>
                </div>
            </section>
            <section>
                <div className="container text-center">
                    <h2 className="text-center pt-[72px] font-[700] text-[40px] pb-[55px]">
                        NEW ARRIVALS
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(295px,1fr))] w-[100%] place-items-center gap-4 pb-[36px]">
                        {newArrivals?.map((item) => (
                            <ArrivalsCard key={item.id} {...item} />
                        ))}
                    </div>
                    <button className="py-[15px] px-[80px] rounded-[62px] border border-gray cursor-pointer">
                        View All
                    </button>
                </div>
            </section>
            <section>
                <div className="container text-center">
                    <h2 className="text-center pt-[72px] font-[700] text-[40px] pb-[55px] uppercase">
                        top selling
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(295px,1fr))] w-[100%] place-items-center gap-4 pb-[36px]">
                        {topSelling?.map((item2) => (
                            <ArrivalsCard key={item2.id} {...item2} />
                        ))}
                    </div>
                    <button className="py-[15px] px-[80px] rounded-[62px] border border-gray cursor-pointer">
                        View All
                    </button>
                </div>
            </section>
            {/* <section className="pt-[80px]">
                <div className="container">
                    <div className="bg-light-grey rounded-[40px]">
                        <h3 className="text-center font-bold text-[48px] text-black pt-[70px] pb-[64px]">
                            BROWSE BY dress STYLE
                        </h3>
                        <div className="grid grid-cols-2 px-[64px] pb-[76px]">
                            <div className="relative h-[289px] w-[407px]">
                                <img
                                    src={topLeft}
                                    alt="Casual"
                                    className="w-full"
                                />
                                <span className="absolute top-[25px] left-[36px] font-bold text-[36px]">
                                    Casual
                                </span>
                            </div>
                            <div className="relative w-[684px] h-[289px]">
                                <img
                                    src={topRight}
                                    alt="Formal"
                                    className="w-full"
                                />
                                <span className="absolute top-[25px] left-[36px] font-bold text-[36px]">
                                    Formal
                                </span>
                            </div>
                            <div className="relative w-[684px] h-[289px]">
                                <img
                                    src={topRight}
                                    alt="Party"
                                    className="w-full"
                                />
                                <span className="absolute top-[25px] left-[36px] font-bold text-[36px]">
                                    Party
                                </span>
                            </div>
                            <div className="relative"></div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="pt-[80px]">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-[48px]">
                            OUR HAPPY CUSTOMERS
                        </h3>
                        <div className="flex gap-[16px]">
                            <LeftIcon />
                            <RightIcon />
                        </div>
                    </div>
                    <div className="flex gap-[20px] pt-[40px] pb-[80px]">
                        <CustomersCard
                            star={5}
                            title="Sarah M."
                            sub_title={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
                        />
                        <CustomersCard
                            star={5}
                            title="Sarah M."
                            sub_title={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
                        />
                        <CustomersCard
                            star={5}
                            title="Sarah M."
                            sub_title={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
