"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const menuItems = [
    { href: "/payment/uyali-aloqa", label: "Uyali aloqa" },
    { href: "/payment/internet", label: "Internet" },
    { href: "/payment/kommunal", label: "Kommunal Xizmatlar" },
    { href: "/payment/tarix", label: "To‘lovlar tarixi" },
];

export default function PaymentLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="container">
            <div className="flex min-h-screen bg-white pt-[50px]">
                <div className="w-1/3 bg-white p-4 rounded-lg">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>
                                    <span
                                        className={`block p-2 cursor-pointer ${
                                            pathname === item.href
                                                ? "font-bold text-green-600 border-l-4 border-green-600"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 p-6 bg-white rounded-lg ml-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
