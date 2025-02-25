import React from "react";
import { VercacePartner } from "../../assets/partners/vercace";
import { ZaraPartner } from "../../assets/partners/zara";
import { GucciPartner } from "../../assets/partners/gucci";
import { PradaPartner } from "../../assets/partners/prada";
import { CalvinPartner } from "../../assets/partners/calvin";
import { ArrivalsCard } from "./components/arrivals-card";

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
                        <ArrivalsCard />
                        <ArrivalsCard />
                        <ArrivalsCard />
                        <ArrivalsCard />
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
                        <ArrivalsCard />
                        <ArrivalsCard />
                        <ArrivalsCard />
                        <ArrivalsCard />
                    </div>
                    <button className="py-[15px] px-[80px] rounded-[62px] border border-gray cursor-pointer">
                        View All
                    </button>
                </div>
            </section>
        </>
    );
};
