"use server";

import { revalidateTag } from "next/cache";

export interface userT {
    title: string;
    description: string;
    id: number;
}

const url = process.env.BASE_URL;

export const getUser = async (): Promise<userT[]> => {
    const res = await fetch(`${url}/todos`, {
        next: {
            tags: ["user_list"],
        },
    });
    if (!res.ok) throw new Error("Error");
    return res.json();
};

export const createUser = async (
    userData: Omit<userT, "id">
): Promise<userT> => {
    const res = await fetch(`${url}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    if (!res.ok) throw new Error(res.statusText);
    revalidateTag("user_list");
    return res.json();
};

export const updateUser = async (userData: userT): Promise<userT> => {
    const res = await fetch(`${url}/todos/${userData.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    if (!res.ok) throw new Error(res.statusText);
    revalidateTag("user_list");
    return res.json();
};

export const deleteUser = async (id: number): Promise<void> => {
    const res = await fetch(`${url}/todos/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error(res.statusText);
    revalidateTag("user_list");
};
