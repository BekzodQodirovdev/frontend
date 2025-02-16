import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import uzcard from "../../assets/images/uzcard.png";
import humo from "../../assets/images/humo.png";

import playmarketImg from "../../assets/images/playmarket.png";
import appstoreImg from "../../assets/images/appstore.png";

export const Footer = () => {
    return (
        <>
            <section className="bg-[#eef4ff]">
                <div className="container">
                    <div className="flex justify-between pt-[31px] pb-[63px]">
                        <ul className="flex flex-col gap-[20px]">
                            <li className="text-[20px] text-[#11142d]">
                                <a href="#">Платформа хақида</a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">Liber ўзи нима?</a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">Фойдаланиш шартлари</a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">Ёрдам</a>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-[20px]">
                            <li className="text-[20px] text-[#11142d]">
                                <a href="#">Обуна хақида</a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">Обуна бўлиш</a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">Қандай тўлаш</a>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-[20px]">
                            <li className="text-[20px] text-[#11142d]">
                                <a href="#">Китоблар</a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">Аудио китоблар</a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">Электрон китоблар</a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">Китоблар</a>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-[20px]">
                            <li className="text-[20px] text-[#11142d]">
                                <a href="#">Мобил илова</a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">
                                    <img
                                        className="w-[161px]"
                                        src={playmarketImg}
                                        alt="img"
                                    />
                                </a>
                            </li>
                            <li className="text-[18px] text-[#11142d]">
                                <a href="#">
                                    <img
                                        className="w-[161px]"
                                        src={appstoreImg}
                                        alt="img"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-[#10182c]">
                <div className="container">
                    <div className="flex gap-[100px] py-[12px]">
                        <div className="flex flex-col gap-[12px]">
                            <p className="text-[14px] text-white pt-12px pb-10px">
                                Ижтимоий тармоқлар
                            </p>
                            <div className="flex gap-[25px]">
                                <FaFacebook color="white" size="24px" />
                                <FaYoutube color="white" size="24px" />
                                <AiOutlineTikTok color="white" size="24px" />
                                <FaTelegram color="white" size="24px" />
                                <FaInstagram color="white" size="24px" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <p className="text-[14px] text-white pt-12px pb-10px">
                                Боғланиш
                            </p>
                            <div className="flex gap-[23px]">
                                <p className="text-white">+998 90 253 77 53</p>
                                <p className="text-white">support@liber.uz</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <p className="text-[14px] text-white pt-12px pb-10px">
                                Биз қабул қиламиз
                            </p>
                            <div className="flex">
                                <img
                                    className="w-[60px]"
                                    src={uzcard}
                                    alt="uzkard"
                                />
                                <img
                                    className="w-[60px]"
                                    src={humo}
                                    alt="humo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
