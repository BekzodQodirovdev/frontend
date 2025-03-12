import { ProductCard } from "./card";

const products = [
    {
        name: "Fanta",
        description: "Qoy bo‘yin (muzzlatilgan)",
        price: "7,040",
        image: "/fanta.png",
    },
    {
        name: "Go‘sht",
        description: "Halal go‘sht",
        price: "7,040",
        image: "/meat.png",
    },
    {
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
