import { useGetProducts } from "../service/query/use";
import { CardItem } from "./card-Item";

export const Card = () => {
    const { data, isLoading } = useGetProducts();

    return (
        <div className="container">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="grid grid-cols-4 gap-5 pt-10">
                    {data?.map((item) => (
                        <CardItem key={item.id} {...item} />
                    ))}
                </div>
            )}
        </div>
    );
};
