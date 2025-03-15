"use client";

import { UserCrad } from "@/components/user-card";
import { UseForm } from "@/components/user-form";
import { getUser } from "@/service/useCreate";
import { useState, useEffect } from "react";
import { userT } from "@/service/useCreate";

export default function Home() {
    const [users, setUsers] = useState<userT[]>([]);
    const [defValue, setDefValue] = useState<userT | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUser();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container">
            <div className="pb-[20px]">
                <UseForm defValue={defValue} setDefValue={setDefValue} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {users?.map((item) => (
                    <UserCrad
                        key={item.id}
                        {...item}
                        setDefValue={setDefValue}
                    />
                ))}
            </div>
        </div>
    );
}
