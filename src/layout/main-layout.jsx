import React from "react";
import { Header } from "../layout/header";

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
