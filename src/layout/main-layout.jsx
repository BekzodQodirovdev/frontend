import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <header className="bg-[#ffffff]">
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer className="pt-12  border-t-[1px] border-t-[#d4d4d4]">
                <Footer />
            </footer>
        </div>
    );
};
