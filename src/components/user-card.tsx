"use client";

import { deleteUser, userT } from "@/service/useCreate";
import { useState, useTransition } from "react";

interface UserCardProps extends userT {
    setDefValue: (user: userT | null) => void;
}

export const UserCrad = ({
    id,
    title,
    description,
    setDefValue,
}: UserCardProps) => {
    const [loading, setLoading] = useTransition();
    const deleteHandle = () => {
        setLoading(async () => {
            try {
                await deleteUser(id);
            } catch (error) {
                console.log(error);
            }
        });
    };

    const editHandle = () => {
        setDefValue({ id, title, description });
    };

    return (
        <div className="p-[30px] border rounded-3xl flex flex-col gap-[10px]">
            <h4 className="text-4xl">{title}</h4>
            <p>{description}</p>
            <div className="flex gap-[10px]">
                <button
                    onClick={editHandle}
                    className="bg-yellow-300 rounded-3xl cursor-pointer py-[10px] px-[20px]"
                >
                    Edit
                </button>
                <button
                    onClick={deleteHandle}
                    disabled={loading}
                    className="bg-red-300 rounded-3xl cursor-pointer py-[10px] px-[20px]"
                >
                    {loading ? "Loading..." : "Delete"}
                </button>
            </div>
        </div>
    );
};
