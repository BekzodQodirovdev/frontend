import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { HeaderSearch } from "./components/header-search";
import { HeaderButton } from "./components/header-button";
import { Navbar } from "./components/navbar";

export const Header = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Stack gap={"60px"} py={"31px"} direction={"row"}>
                    <HeaderSearch />
                    <HeaderButton />
                </Stack>
            </Container>
            <Navbar />
        </>
    );
};
