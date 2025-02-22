import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../config/color";

export const Footer = () => {
    return (
        <Box bgcolor={"#F2F2F2"} py={"40px"}>
            <Container maxWidth="xl">
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack>
                        <Typography color={COLORS.titleColor} pb={"24px"}>
                            Каталог товаров
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Ковры
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Коврики
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Дорожки
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Для ванной
                        </Typography>
                        <Typography color={COLORS.greyText}>
                            Особенные ковры
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography color={COLORS.titleColor} pb={"24px"}>
                            Личный кабинет
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Личный кабинет
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Мои заказы
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Избранное
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography color={COLORS.titleColor} pb={"24px"}>
                            Центр поддержки
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Контакты
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Доставка
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Возвраты
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography color={COLORS.titleColor} pb={"24px"}>
                            Помощь и контакты
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            +7 775 657 66 76
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            info@kilem.kz
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography color={COLORS.titleColor} pb={"24px"}>
                            Рассылка
                        </Typography>
                        <Typography color={COLORS.greyText} pb={"16px"}>
                            Подпишитесь, чтобы всегда быть в курсе наших новый
                            акций
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};
