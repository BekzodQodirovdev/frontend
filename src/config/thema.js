import { createTheme, ThemeProvider } from "@mui/material";
import { COLORS } from "./color";

export const thema = createTheme({
    palette: {
        primary: {
            main: COLORS.primary,
            50: "#F0F5F2",
            100: "#DEE8E3",
            200: "#C0D3CA",
            300: "#9FBCAE",
            400: "#7EA593",
            500: "#618C78",
            600: "#4D6F5F",
            700: "#3A5448",
            800: "#283931",
            900: "#131B17",
            950: "#0A0F0D",
        },
        error: {
            main: COLORS.danger,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 768,
            lg: 992,
            xl: 1323,
        },
    },
    typography: {
        fontFamily: ["Ubuntu", "serif"].join(","),
        h2: {
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "130%",
            color: COLORS.titleColor,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "140%",
                    padding: "13px 38px",
                    borderRadius: "10px",
                },
            },
            variants: [
                {
                    props: { variant: "contained" },
                },
            ],
        },
    },
});
