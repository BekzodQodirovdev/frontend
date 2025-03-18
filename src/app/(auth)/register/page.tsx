"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../_service/auth-service";
import { useRouter } from "next/navigation";

export interface inputsR {
    email: string;
    password: string;
    name: string;
}

const Register = () => {
    const {
        handleSubmit,
        register,
        reset,
        setError,
        formState: { errors },
    } = useForm<inputsR>();
    const [taransition, setTransition] = React.useTransition();
    const router = useRouter();

    const submit = (data: inputsR) => {
        setTransition(async () => {
            try {
                const res = await registerUser(data);
                if (res) {
                    router.push("/login");
                }
            } catch (error) {
                const err = error as Error;
                setError("email", { message: err.message });
                setError("password", { message: err.message });
                setError("name", { message: err.message });
            }
        });
    };
    return (
        <div className="container">
            <div className="flex justify-center pt-[100px]">
                <form onSubmit={handleSubmit(submit)} className="space-y-10">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="border p-[10px]"
                            {...register("name")}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border p-[10px]"
                            {...register("email")}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border p-[10px]"
                            {...register("password")}
                        />
                    </div>
                    <button
                        type="submit"
                        className="border rounded-2xl p-[10px] w-full text-3xl cursor-pointer"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
