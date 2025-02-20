import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import heroImg1 from "../assets/heroImg1.png";
import heroImg2 from "../assets/heroImg2.png";

export const Hero = () => {
    return (
        <>
            <Container>
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "31px",
                        py: "30px",
                    }}
                >
                    <Typography>Ковры</Typography>
                    <Typography>Коврики</Typography>
                    <Typography>Для ванной</Typography>
                    <Typography>Дорожки</Typography>
                    <Typography>Особенные ковры</Typography>
                    <Typography>Центр поддержки</Typography>
                    <Typography>Контакты</Typography>
                </Stack>
            </Container>
            <Box bgcolor="#618C78" py="100px">
                <Container>
                    <Stack direction="row" justifyContent="space-between">
                        <Stack gap="32px">
                            <Typography
                                fontSize="60px"
                                color="#f9f9f9"
                                fontWeight="700px"
                                lineHeight="120%"
                            >
                                Новая коллекция ковров Venetta
                            </Typography>
                            <Button
                                variant="contained"
                                bgcolor="#CB4A4A"
                                sx={{ width: "198px", height: "51px" }}
                            >
                                Смотреть все
                            </Button>
                        </Stack>
                        <Stack direction="row">
                            <Box>
                                <img src={heroImg1} alt="img" />
                            </Box>
                            <Box>
                                <img src={heroImg2} alt="img" />
                            </Box>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};
