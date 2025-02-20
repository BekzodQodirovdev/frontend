import {
    Badge,
    Container,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import logo from "../assets/Logo.png";
import { LocationIcon } from "../assets/svg/location";
import { SearchIcon } from "../assets/svg/search";
import { AccauntIcon } from "../assets/svg/user";
import { LikeIcon } from "../assets/svg/like";
import { Backet } from "../assets/svg/backet";
import Box from "@mui/material/Box";

export const Header = () => {
    return (
        <Container>
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "31px",
                }}
            >
                <img src={logo} alt="logo" />
                <Stack direction="row" gap="8px">
                    <LocationIcon />
                    <Typography>Алматы</Typography>
                </Stack>
                <TextField
                    id="standard-basic"
                    label="Поиск по товарам"
                    variant="standard"
                    sx={{
                        width: "500px",
                        maxWidth: "100%",
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    type="button"
                                    sx={{ p: "10px", mb: "10px" }}
                                    aria-label="search"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Box sx={{ display: { xs: "none", md: "flex", gap: "18px" } }}>
                    <IconButton
                        size="large"
                        aria-label="show 4 new mails"
                        color="inherit"
                    >
                        <AccauntIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={5} color="error">
                            <LikeIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Badge badgeContent={2} color="error">
                            <Backet />
                        </Badge>
                    </IconButton>
                </Box>
            </Stack>
        </Container>
    );
};
