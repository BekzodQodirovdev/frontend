import { Card } from "../pages/card/card";
import { Home } from "../pages/home/home";
import { ProductDetail } from "../pages/product-detail/product-detail";

export default [
    {
        comp: Home,
    },
    {
        comp: ProductDetail,
        path: "/:id",
    },
    {
        comp: Card,
        path: "/card",
    },
];
