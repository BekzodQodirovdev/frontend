import Image from "next/image";
import React from "react";

export const Footer = () => {
    return (
        <div className="container">
            <div className="pt-[25px] pb-[39px] bg-white flex justify-between">
                <div className="flex flex-col">
                    <Image
                        src={"/logo.svg"}
                        width={110}
                        height={53}
                        alt="logo"
                    />
                    <p className="pt-[22px]">HilalMart © 2021</p>
                    <p>Barcha huquqlar kafolatlangan</p>
                    <div className="flex gap-[12px] pt-[16px]">
                        <Image
                            src={"/playMarket.png"}
                            alt="play market"
                            width={102}
                            height={30}
                        />
                        <Image
                            src={"/appStore.png"}
                            alt="app store"
                            width={102}
                            height={30}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="pb-[16px]">Foydali havolalar</p>
                    <div className="flex flex-col gap-[6px]">
                        <a href="#">Bosh sahifa</a>
                        <a href="#">Yordam kerakmi?</a>
                        <a href="#">Foydalanish shartlari</a>
                        <a href="#">Maxfiylik siyosati</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="pb-[16px]">Biz haqimizda</p>
                    <div className="flex flex-col gap-[6px]">
                        <a href="#">
                            Manzil: #214, G-dong, Lotte castle, 347 Jongno,
                            Jongno-gu, Seoul, 03113, Crescent Trade ltd
                        </a>
                        <a href="#">Korxona nomi: Crescent trade llc</a>
                        <a href="#">Korxona rahbari: DADAJONOV RAKHIMJON</a>
                        <a href="#">Registratsiya raqami: 433-62-00377</a>
                        <a href="#">Telefon raqam: 02-3670-6808</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
