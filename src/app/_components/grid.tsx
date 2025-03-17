import { ProductCard } from "./card";

export const products = [
    {
        id: 1,
        name: "Fanta",
        description: "Qoy bo‘yin (muzzlatilgan)",
        price: "7,040",
        image: "/fanta.png",
    },
    {
        id: 2,
        name: "Go‘sht",
        description: "Halal go‘sht",
        price: "7,040",
        image: "/meat.png",
    },
    {
        id: 3,
        name: "Limon",
        description: "Nordon",
        price: "7,040",
        image: "/limon.png",
    },
    {
        id: 4,
        name: "Fanta",
        description: "Qoy bo‘yin (muzzlatilgan)",
        price: "7,040",
        image: "/fanta.png",
    },
    {
        id: 5,
        name: "Go‘sht",
        description: "Halal go‘sht",
        price: "7,040",
        image: "/meat.png",
    },
    {
        id: 6,
        name: "Limon",
        description: "Nordon",
        price: "7,040",
        image: "/limon.png",
    },
];

export const ProductList = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};
