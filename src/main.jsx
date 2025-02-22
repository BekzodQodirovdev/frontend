import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { thema } from "./config/thema.js";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ThemeProvider theme={thema}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
