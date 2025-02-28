import React from "react";
import logo from "../assets/logo.svg";
import { TwitterIcon } from "../assets/footer/twitter";
import { FacebookIcon } from "../assets/footer/facebook";
import { InstagramIcon } from "../assets/footer/instagram";
import { GithubIcon } from "../assets/footer/github";

export const Footer = () => {
    return (
        <div className="container relative">
            <div className="bg-black py-[36px] px-[64px] rounded-[20px] w-full">
                <div className="flex justify-between">
                    <h4 className="text-white font-bold text-[40px] max-w-[551px]">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h4>
                    <div className="flex flex-col gap-[14px]">
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="bg-white py-[13px] pl-[50px] rounded-[62px]"
                        />
                        <button className="py-[12px] px-[88px] bg-white text-black rounded-[62px]">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between pt-[50px]">
                <ul>
                    <li className="pb-[25px]">
                        <img src={logo} alt="logo" />
                    </li>
                    <li className="max-w-[248px]">
                        We have clothes that suits your style and which you’re
                        proud to wear. From women to men.
                    </li>
                    <li className="flex gap-[12px] pt-[35px]">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <GithubIcon />
                    </li>
                </ul>
                <ul className="flex flex-col gap-[10px]">
                    <li className="pb-[16px] uppercase font-medium">Company</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Works</li>
                    <li>Career</li>
                </ul>
                <ul className="flex flex-col gap-[10px]">
                    <li className="pb-[16px]">Help</li>
                    <li>Customer Support</li>
                    <li>Delivery Details</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul className="flex flex-col gap-[10px]">
                    <li className="pb-[16px]">FAQ</li>
                    <li>Account</li>
                    <li>Manage Deliveries</li>
                    <li>Orders</li>
                    <li>Payments</li>
                </ul>
                <ul className="flex flex-col gap-[10px]">
                    <li className="pb-[16px]">Resources</li>
                    <li>Free eBooks</li>
                    <li>Development Tutorial</li>
                    <li>How to - Blog</li>
                    <li>Youtube Playlist</li>
                </ul>
            </div>
            <div className="h-[2px] bg-[#d8d8d8] w-full mt-[50px] mb-[25px]"></div>
            <p className="pb-[88px]">
                Shop.co © 2000-2023, All Rights Reserved
            </p>
        </div>
    );
};
