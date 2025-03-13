import Image from "next/image";

export const ProductCard = ({
    product,
}: {
    product: {
        image: string;
        name: string;
        description: string;
        price: string;
    };
}) => {
    return (
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
            <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto"
            />
            <h3 className="text-center font-medium mt-2">{product.name}</h3>
            <p className="text-gray-500 text-sm text-center">
                {product.description}
            </p>
            <p className="text-center font-semibold text-lg text-green-600">
                {product.price} W
            </p>
            <button className="w-full mt-2 bg-[#F3F3F3] text-black py-2 rounded-md hover:bg-[#019e7f] cursor-pointer">
                Qo‘shish
            </button>
        </div>
    );
};
