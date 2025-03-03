import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetProducts = () => {
    return useQuery({
        queryKey: ["todo_list"],
        queryFn: () =>
            request
                .get<{ title: string; description: string; id: number }[]>(
                    "/todos"
                )
                .then((res) => res.data),
    });
};
