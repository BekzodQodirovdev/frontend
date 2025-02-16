import React from "react";
import { HeaderSearch } from "./header-search";
import { Button } from "../../components/ui/button";
import { UserIcon } from "../../assets/icon/user-icon";
import { UzbekistanIcon } from "../../assets/icon/uzbekistan-icon";
import { BottomIcon } from "../../assets/icon/bottom-icon";

export const Header = () => {
    return (
        <>
            <div className="py-[21px] gap-[64px] container flex">
                <HeaderSearch />
                <div className="flex gap-1">
                    <div className="relative">
                        <UzbekistanIcon className="absolute left-[16px] top-[50%] translate-y-[-50%]" />
                        <select
                            className="outline-none bg-primary-soft py-[13px] pl-[50px] pr-[40px] text-left rounded-[14px] appearance-none cursor-pointer text-[16px] text-primary"
                            name="category"
                        >
                            <option value="krl">Ўз</option>
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                        </select>
                        <BottomIcon className="absolute right-[17px] top-[50%] translate-[-50%] cursor-pointer" />
                    </div>
                    <Button
                        className={"hover:text-red-400"}
                        startIcon={<UserIcon />}
                        variant={"birinchi"}
                    >
                        Kirish
                    </Button>
                </div>
            </div>
        </>
    );
};
