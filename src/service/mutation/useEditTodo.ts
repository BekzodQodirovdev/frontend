import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useEditTodo = () => {
    return useMutation({
        mutationFn: (data: {
            title: string;
            description: string;
            id: number;
        }) => request.patch(`/todos/${data.id}`, data).then((res) => res.data),
    });
};
