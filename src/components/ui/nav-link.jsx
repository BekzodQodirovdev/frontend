import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavLink = ({ children, to, ...props }) => {
    const pathName = useLocation();

    return (
        <Link
            className={
                to === pathName.pathname ? "text-[#b88e2f]" : "text-black"
            }
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};
