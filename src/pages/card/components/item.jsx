import React from "react";
import { useDispatch } from "react-redux";
import {
    deleteProduct,
    toggleAmount,
} from "../../../store/slices/cart-reducer";
import itemImg from "../../../assets/card/image.png";
import { DeleteIcon } from "../../../assets/card/delete";

export const ItemCom = ({ name, id, userPrice, userCount }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-[16px]">
            <img src={itemImg} alt="img" />
            <div className="flex justify-between w-full">
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="pb-[2px] text-[20px] font-bold max-w-[390px]">
                            {name}
                        </h3>
                        <p className="pb-[4px] text-[14px] font-normal">
                            Size: Large
                        </p>
                        <p className="mb-auto text-[14px] font-normal">
                            Color: White
                        </p>
                    </div>
                    <p className="text-[24px] font-bold">$ {userPrice}</p>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div
                        onClick={() => dispatch(deleteProduct({ id }))}
                        className="cursor-pointer"
                    >
                        <DeleteIcon />
                    </div>
                    <div className="bg-[#f0f0f0] py-[12px] px-[20px] rounded-[62px]">
                        <button
                            onClick={() => {
                                if (userCount > 1) {
                                    dispatch(
                                        toggleAmount({
                                            id,
                                            type: "remove",
                                        })
                                    );
                                }
                            }}
                            className="cursor-pointer"
                        >
                            -
                        </button>
                        <span className="px-[20px]">{userCount}</span>
                        <button
                            onClick={() =>
                                dispatch(
                                    toggleAmount({
                                        id,
                                        type: "add",
                                    })
                                )
                            }
                            className="cursor-pointer"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
