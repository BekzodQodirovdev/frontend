import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="border-b-2 border-gray-200">
            <div className="container">
                <div className="py-[20px] flex  justify-between items-center">
                    <div className="pr-[50px]">
                        <Link href={"/"}>
                            <Image
                                src="/logo.svg"
                                alt="logo"
                                width={110}
                                height={53}
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div className="flex-1">
                        <div className="relative">
                            <button className="absolute top-[12px] left-[9px] cursor-pointer">
                                <Image
                                    src={"/search.svg"}
                                    alt="search icon"
                                    width={24}
                                    height={24}
                                />
                            </button>
                            <input
                                type="text"
                                placeholder="Qidirish"
                                className="pl-[49px] w-full text-[#cacaca] border border-[#019e7f] rounded-[6px] pt-[12px] pb-[13px]"
                            />
                        </div>
                    </div>
                    <div className="flex pl-[42px] pr-[35px] gap-[7px]">
                        <Image
                            src={"/contact.svg"}
                            alt="contact icon"
                            width={14}
                            height={24}
                        />
                        <a className="underline" href="#">
                            Bog’lanish
                        </a>
                    </div>
                    <div className="relative ">
                        <div className="absolute top-[12.33px] left-[13.67px]">
                            <Image
                                src="/payme.svg"
                                alt="payme icon"
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </div>
                        <Link href={"/payment"}>
                            <button className="py-[11px] pl-[40px] pr-[13px] text-[13px] font-bold text-[#019e7f] border border-[#019e7f] rounded-[6px] cursor-pointer">
                                Payme
                            </button>
                        </Link>
                    </div>
                    <div className="relative ml-[21px]">
                        <select className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition text-teal-600 font-medium cursor-pointer">
                            <option value="uz">🇺🇿 Uz / UZS</option>
                            <option value="en">🇺🇸 En / USD</option>
                        </select>
                    </div>
                    <Image
                        src={"/userIcon.svg"}
                        alt="user icon"
                        className="ml-[22px] cursor-pointer"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </header>
    );
};
