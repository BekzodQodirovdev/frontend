import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import img from "../assets/product-2.png";
import { COLORS } from "../config/color";
import { HeardIcon } from "../assets/heard-icon";
import { useNavigate } from "react-router-dom";

const ProductWrapper = styled.div`
    border-radius: 10px;
    height: 534px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    position: relative;
    padding: 68px 20px 21px 20px;
    cursor: pointer;
`;

const CardBage = styled.span`
    background-color: #618c78;
    padding: 3px 20px;
    display: inline-block;
    position: absolute;
    font-weight: 130%;
    color: #fff;
    top: 20px;
    left: 0;
`;

const CardLike = styled.span`
    display: inline-block;
    position: absolute;
    right: 22px;
    top: 23px;
`;

const CardText = styled.span`
    text-decoration: line-through;
`;

export const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const routeCard = () => {
        navigate(`/${item.id}`);
    };
    return (
        <ProductWrapper  onClick={routeCard}>
            <CardBage>{item.label}</CardBage>
            <CardLike>
                <IconButton>
                    <HeardIcon />
                </IconButton>
            </CardLike>
            <Box mb={"20px"} textAlign={"center"}>
                <img src={img} alt="img" />
            </Box>
            <Typography
                mb={"8px"}
                maxWidth={"175px"}
                fontSize={"18px"}
                color={COLORS.titleColor}
            >
                {item.name}
            </Typography>
            <Typography
                mb={"8px"}
                maxWidth={"175px"}
                fontSize={"14px"}
                color={COLORS.titleColor}
            >
                Размер: {item.dimensions}
            </Typography>
            <Typography mb={"8px"} fontSize={"14px"} color={COLORS.titleColor}>
                Производитель: {item.origin}
            </Typography>
            <Stack direction={"row"} gap={"8px"}>
                <Rating readOnly value={0} />
                <Typography>{item.reviews} отзывов</Typography>
            </Stack>
            <Stack direction={"row"} gap={"15px"}>
                <Stack gap={"8px"}>
                    <Typography
                        fontSize={"14px"}
                        fontWeight={400}
                        lineHeight={"100%"}
                        color={COLORS.greyText}
                    >
                        {item.old_price ? "Старая цена" : "Цена"}
                    </Typography>
                    {item.old_price ? (
                        <CardText>{item.old_price}</CardText>
                    ) : (
                        <Typography fontSize={"14px"} fontWeight={400}>
                            {item.current_price}
                        </Typography>
                    )}
                </Stack>
                <Stack gap={"8px"}>
                    <Typography
                        fontSize={"14px"}
                        fontWeight={400}
                        lineHeight={"100%"}
                        color={COLORS.greyText}
                    >
                        {item.current_price ? "В рассрочку" : "Новая цена"}
                    </Typography>
                    {item.current_price ? (
                        <Stack direction={"row"} gap={"4px"}>
                            <Typography
                                bgcolor={COLORS.primary}
                                color="#fff"
                                fontSize={"14px"}
                                fontWeight={400}
                                lineHeight={"100%"}
                            >
                                {item.current_price}
                            </Typography>
                            <Typography
                                fontSize={"14px"}
                                fontWeight={400}
                                lineHeight={"100%"}
                            >
                                {item.installment_plan}
                            </Typography>
                        </Stack>
                    ) : (
                        <Typography color={COLORS.primary}>
                            {item.discounted_price}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </ProductWrapper>
    );
};
