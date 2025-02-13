import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export const MainLayout = ({ children }) => {
    return (
        <>
            <header>
                <div className="container">
                    <Header />
                </div>
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};
