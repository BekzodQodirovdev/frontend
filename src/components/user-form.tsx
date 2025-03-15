"use client";
import { createUser, updateUser } from "@/service/useCreate";
import { useState, useTransition, useEffect } from "react";
import { useForm } from "react-hook-form";
import { userT } from "@/service/useCreate";


interface inputT {
    title: string;
    description: string;
}

interface FormProps {
    defValue: userT | null;
    setDefValue: (user: userT | null) => void;
}

export const UseForm = ({ defValue, setDefValue }: FormProps) => {
    const {
        handleSubmit,
        reset,
        setError,
        register,
        formState: { errors },
    } = useForm<inputT>();

    useEffect(() => {
        reset(defValue || { title: "", description: "" });
    }, [defValue, reset]);

    const [loading, setLoading] = useTransition();

    const submit = (data: inputT) => {
        setLoading(async () => {
            try {
                if (defValue?.id) {
                    await updateUser({ ...data, id: defValue.id });
                } else {
                    await createUser(data);
                }
                reset();
                setDefValue(null);
            } catch (error) {
                setError("title", { message: (error as Error).message });
            }
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className="flex gap-8 items-center justify-center">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter title"
                            className="p-[6px] rounded-2xl m-[5] border"
                            {...register("title")}
                        />
                        {errors.title && (
                            <p className="text-[11px] text-red-500">{errors.title.message}</p>
                        )}
                    </div>
                    <div>
                        <input
                            className="p-[6px] rounded-2xl m-[5px] border"
                            {...register("description")}
                            placeholder="Enter description"
                            type="text"
                        />
                    </div>
                    <button
                        className="py-[10px] px-[20px] cursor-pointer rounded-3xl bg-green-400 text-amber-50"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "LOADING..." : defValue?.id ? "Update" : "Send"}
                    </button>
                </div>
            </form>
        </div>
    );
};
