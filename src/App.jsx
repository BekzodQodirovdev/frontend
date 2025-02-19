import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/shop">
                        <Route index element={<h1>Shop</h1>} />
                        <Route path=":id" element={<Cart />} />
                    </Route>
                    <Route path="/about" element={<h1>About</h1>}></Route>
                    <Route path="/contact" element={<h1>Contact</h1>}></Route>

                    <Route
                        path="*"
                        element={
                            <h1 className="text-4xl text-[#b88e2f]">
                                Page not found
                            </h1>
                        }
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
