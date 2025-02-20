import React from "react";
import Box from "@mui/material/Box";
import { LikeIcon } from "../assets/svg/like";
import novinkiCardImg from "../assets/novinki.png";
import { Stack, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export const Card = ({
    label,
    name,
    dimensions,
    origin,
    reviews,
    current_price,
    installment_plan,
    old_price,
    discounted_price,
}) => {
    return (
        <Box
            width="290px"
            height="524px"
            position="relative"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
            borderRadius="12px"
            overflow="hidden"
            p="15px"
            bgcolor="white"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Box
                position="absolute"
                py="3px"
                px="12px"
                left="10px"
                top="15px"
                bgcolor="#618C78"
                borderRadius="5px"
                color="white"
                fontSize="12px"
            >
                {label}
            </Box>

            <Box position="absolute" right="15px" top="15px">
                <LikeIcon />
            </Box>

            <Box
                mt="60px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="180px"
            >
                <img
                    src={novinkiCardImg}
                    alt="Product"
                    style={{
                        borderRadius: "8px",
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            </Box>

            <Typography
                fontSize="16px"
                fontWeight="bold"
                mt="10px"
                sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {name}
            </Typography>

            <Typography fontSize="14px" mt="5px" color="gray">
                Размер: {dimensions}
            </Typography>
            <Typography fontSize="14px" mt="2px" color="gray">
                Производитель: {origin}
            </Typography>

            <Stack direction="row" alignItems="center" mt="10px">
                <Rating
                    name="text-feedback"
                    value={reviews}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                        <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                        />
                    }
                />
                <Typography fontSize="14px" color="gray" ml="5px">
                    {reviews} отзывов
                </Typography>
            </Stack>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt="15px"
            >
                <Stack>
                    <Typography fontSize="14px" color="gray">
                        Цена
                    </Typography>
                    <Typography fontSize="16px" fontWeight="bold">
                        {current_price ? current_price : old_price}
                    </Typography>
                </Stack>
                <Stack alignItems="center">
                    <Typography fontSize="14px" color="gray">
                        В рассрочку
                    </Typography>
                    <Box
                        bgcolor="#618C78"
                        color="white"
                        px="10px"
                        py="3px"
                        borderRadius="5px"
                        fontSize="14px"
                        fontWeight="bold"
                    >
                        {installment_plan ? installment_plan : discounted_price}
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};
