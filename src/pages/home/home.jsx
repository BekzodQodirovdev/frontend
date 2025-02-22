import {
    Box,
    Button,
    Container,
    Grid2,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { COLORS } from "../../config/color";
import { SecondaryButton } from "../../components/secondary-button";
import bg from "../../assets/product1.png";
import { ProductCard } from "../../components/product-card";
import { data } from "../../data";

export const Home = () => {
    return (
        <>
            <section>
                <Box bgcolor={COLORS.primary} py={"98px"}>
                    <Container>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Box maxWidth={"524px"}>
                                <Typography
                                    mb={"32px"}
                                    fontWeight={700}
                                    fontSize={60}
                                    color="#fff"
                                >
                                    Новая коллекция ковров Venetta
                                </Typography>
                                <SecondaryButton>Смотреть все</SecondaryButton>
                            </Box>
                            <Stack direction={"row"}>
                                <img src={bg} alt="img" />
                                <img src={bg} alt="img" />
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </section>
            <Box my={"100px"}>
                <Container maxWidth="xl">
                    <Stack
                        justifyContent="space-between"
                        pb="30px"
                        direction="row"
                    >
                        <Stack gap="32px" direction="row" alignItems="end">
                            <Typography
                                fontSize={"40px"}
                                fontWeight={700}
                                lineHeight={"130%"}
                                m={0}
                                p={0}
                                color={COLORS.titleColor}
                            >
                                Новинки
                            </Typography>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={400}
                                lineHeight={"140%"}
                                color={COLORS.primary}
                                sx={{ textDecoration: "underline" }}
                            >
                                Все новинки
                            </Typography>
                        </Stack>
                        <Stack gap="24px" direction="row">
                            <Button
                                color="#618C78"
                                sx={{
                                    py: "9px",
                                    px: "11px",
                                    bgcolor: "#F2F2F2",
                                }}
                            >
                                {"<"}
                            </Button>
                            <Button
                                color="#618C78"
                                sx={{
                                    py: "9px",
                                    px: "11px",
                                    bgcolor: "#F2F2F2",
                                }}
                            >
                                {">"}
                            </Button>
                        </Stack>
                    </Stack>
                    <Box>
                        <Grid2 container spacing={"40px"}>
                            {data.map((i) =>
                                i.category == "Новинка" ? (
                                    <Grid2
                                        key={i.id}
                                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                                    >
                                        <ProductCard item={i} />
                                    </Grid2>
                                ) : (
                                    ""
                                )
                            )}
                        </Grid2>
                    </Box>
                </Container>
            </Box>
            <Box my={"100px"}>
                <Container maxWidth="xl">
                    <Stack
                        justifyContent="space-between"
                        pb="30px"
                        direction="row"
                    >
                        <Stack gap="32px" direction="row" alignItems="end">
                            <Typography
                                fontSize={"40px"}
                                fontWeight={700}
                                lineHeight={"130%"}
                                m={0}
                                p={0}
                                color={COLORS.titleColor}
                            >
                                Скидки
                            </Typography>
                            <Typography
                                fontSize={"18px"}
                                fontWeight={400}
                                lineHeight={"140%"}
                                color={COLORS.primary}
                                sx={{ textDecoration: "underline" }}
                            >
                                Все Скидки
                            </Typography>
                        </Stack>
                        <Stack gap="24px" direction="row">
                            <Button
                                color="#618C78"
                                sx={{
                                    py: "9px",
                                    px: "11px",
                                    bgcolor: "#F2F2F2",
                                }}
                            >
                                {"<"}
                            </Button>
                            <Button
                                color="#618C78"
                                sx={{
                                    py: "9px",
                                    px: "11px",
                                    bgcolor: "#F2F2F2",
                                }}
                            >
                                {">"}
                            </Button>
                        </Stack>
                    </Stack>
                    <Box>
                        <Grid2 container spacing={"40px"}>
                            {data.map((i) =>
                                i.category == "Скидки" ? (
                                    <Grid2
                                        key={i.id}
                                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                                    >
                                        <ProductCard item={i} />
                                    </Grid2>
                                ) : (
                                    ""
                                )
                            )}
                        </Grid2>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
