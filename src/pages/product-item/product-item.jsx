import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import {
    Box,
    Button,
    Container,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import { COLORS } from "../../config/color";
import styled from "@emotion/styled";

import itemImg1 from "../../assets/product-item1.png";
import itemImgGlav from "../../assets/product-item-glavni.png";
import { MinusButton } from "../../assets/minus-button";
import { PlusButton } from "../../assets/plusButton";
import { SecondaryButton } from "../../components/secondary-button";
import { HeardIcon } from "../../assets/heard-icon";

const CardText = styled.span`
    text-decoration: line-through;
    font-size: 40px;
    font-weight: 400;
    line-height: 145%;
    margin-bottom: 24px;
`;

export const ProductItem = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const oneData = data.find((item) => item.id == id);
    return (
        <Container maxWidth="xl" sx={{ pt: "30px" }}>
            <section>
                <Stack direction={"row"} mb={"8px"}>
                    <Typography
                        onClick={() => navigate("/")}
                        color={COLORS.primary}
                        sx={{ cursor: "pointer" }}
                    >
                        Главная / Ковры /{" "}
                    </Typography>
                    <Typography color={COLORS.primary}>
                        {oneData.name}
                    </Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack direction={"row"}>
                        <Rating value={0} readOnly />
                        <Typography ml={"8px"}>
                            {oneData.reviews} отзывов
                        </Typography>
                        <Typography ml={"16px"}>В наличии: 10 штук</Typography>
                    </Stack>
                    <Typography>Код товара: BAL733</Typography>
                </Stack>
                <Box
                    width={"100%"}
                    height={"2px"}
                    bgcolor={COLORS.greyText}
                    mt={"16px"}
                ></Box>
            </section>
            <section>
                <Stack direction={"row"} gap={"40px"} mt={"24px"}>
                    <Stack gap={"40px"}>
                        <Box sx={{ cursor: "pointer" }}>
                            <img src={itemImg1} alt="product" />
                        </Box>
                        <Box sx={{ cursor: "pointer" }}>
                            <img src={itemImg1} alt="product" />
                        </Box>
                        <Box sx={{ cursor: "pointer" }}>
                            <img src={itemImg1} alt="product" />
                        </Box>
                    </Stack>
                    <Box>
                        <img src={itemImgGlav} alt="product" />
                    </Box>
                    <Stack>
                        <Stack direction={"row"} gap={"37px"} mb={"32px"}>
                            <Stack>
                                <Typography color={COLORS.greyText}>
                                    {oneData.old_price ? "Старая цена" : "Цена"}
                                    :
                                </Typography>
                                {oneData.old_price ? (
                                    <CardText>{oneData.old_price}</CardText>
                                ) : (
                                    <Typography
                                        color={COLORS.titleColor}
                                        fontSize={"40px"}
                                        fontWeight={400}
                                        lineHeight={"145%"}
                                        mb={"24px"}
                                    >
                                        {oneData.current_price}
                                    </Typography>
                                )}
                                <Stack
                                    direction={"row"}
                                    gap={"3px"}
                                    mb={"16px"}
                                >
                                    <Typography color={COLORS.greyText}>
                                        Размер:
                                    </Typography>{" "}
                                    {oneData.dimensions} см
                                </Stack>
                                <Typography color={COLORS.primary}>
                                    Перейти к описанию
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography color={COLORS.greyText}>
                                    {oneData.current_price
                                        ? "В рассрочку"
                                        : "Новая цена"}
                                </Typography>
                                <Typography
                                    color={COLORS.primary}
                                    fontSize={"40px"}
                                    fontWeight={400}
                                    lineHeight={"145%"}
                                    mb={"23px"}
                                >
                                    {oneData.current_price
                                        ? oneData.current_price
                                        : oneData.discounted_price}
                                </Typography>
                                <Stack direction={"row"} mb={"16px"}>
                                    <Typography
                                        color={COLORS.greyText}
                                        mr={"14px"}
                                    >
                                        Количество:
                                    </Typography>
                                    <Stack direction={"row"} gap={"5px"}>
                                        <Box sx={{ cursor: "pointer" }}>
                                            <MinusButton />
                                        </Box>
                                        {1}
                                        <Box sx={{ cursor: "pointer" }}>
                                            <PlusButton />
                                        </Box>
                                    </Stack>
                                </Stack>
                                <Typography color={COLORS.primary}>
                                    Подробнее о рассрочке
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            direction={"row"}
                            justifyContent="space-between"
                            spacing={2}
                        >
                            <SecondaryButton
                                sx={{ flexGrow: 2, width: "100%" }}
                            >
                                В корзину
                            </SecondaryButton>
                            <Button variant="outlined" sx={{ flexGrow: 0 }}>
                                <HeardIcon />
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </section>
        </Container>
    );
};
