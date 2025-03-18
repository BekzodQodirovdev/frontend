"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../_service/auth-service";
import { useRouter } from "next/navigation";

export interface inputs {
    email: string;
    password: string;
}

const Login = () => {
    const {
        handleSubmit,
        register,
        reset,
        setError,
        formState: { errors },
    } = useForm<inputs>();
    const [taransition, setTransition] = React.useTransition();
    const router = useRouter();

    const submit = (data: inputs) => {
        setTransition(async () => {
            try {
                const res = await loginUser(data);
                router.push("/profile");
            } catch (error) {
                const err = error as Error;
                setError("email", { message: err.message });
                setError("password", { message: err.message });
            }
        });
    };
    return (
        <div className="container">
            <div className="flex justify-center pt-[100px]">
                <form onSubmit={handleSubmit(submit)} className="space-y-10">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border p-[10px]"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-[12px] text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border p-[10px]"
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="text-[12px] text-red-500">
                                {errors.password.message}
                            </p>
                        )}
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

export default Login;
