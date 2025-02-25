import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ConfigProvider theme={{ token: { colorPrimary: "#c2996b" } }}>
            <App />
        </ConfigProvider>
    </BrowserRouter>
);
