import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { ProductItem } from "./pages/product-item/product-item";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path=":id" element={<ProductItem />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
