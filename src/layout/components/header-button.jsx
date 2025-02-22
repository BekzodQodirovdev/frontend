import { IconButton, Stack } from "@mui/material";
import React from "react";
import { UserIcon } from "../../assets/user-icon";
import { HeardIcon } from "../../assets/heard-icon";
import { BasketIcon } from "../../assets/basket-icon";

export const HeaderButton = () => {
    return (
        <Stack direction={"row"} alignItems={"center"} gap={"30px"}>
            <IconButton>
                <UserIcon />
            </IconButton>
            <IconButton>
                <HeardIcon />
            </IconButton>
            <IconButton>
                <BasketIcon />
            </IconButton>
        </Stack>
    );
};
