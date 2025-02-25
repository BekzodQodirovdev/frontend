import React from "react";
import { Hero } from "./components/hero";
import { CustomForm } from "./components/form";
import { FiteUpload } from "./components/fite-upload";

export const Home = () => {
    return (
        <div>
            <Hero />
            <CustomForm />
            <FiteUpload />
        </div>
    );
};
