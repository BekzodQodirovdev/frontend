import { Box, Container, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { COLORS } from "../../config/color";
import { navbarLinks } from "../data";

const CustomLink = styled(Link)`
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: ${COLORS.titleColor};
    &:hover {
        color: ${COLORS.primary};
    }
`;
export const Navbar = () => {
    return (
        <Box py={"30px"} bgcolor={COLORS.lightGrey}>
            <Container maxWidth="xl">
                <Stack direction={"row"} justifyContent={"space-between"}>
                    {navbarLinks.map((item) => (
                        <CustomLink key={item.id} to={item.path}>
                            {item.name}
                        </CustomLink>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};
