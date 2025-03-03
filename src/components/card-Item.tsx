import React from "react";
import { inputI } from "./form";
import { useDeleteTodo } from "../service/mutation/useDeleteTodo";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEditTodo } from "../service/mutation/useEditTodo";

export const CardItem: React.FC<{
    title: string;
    description: string;
    id: number;
}> = ({ title, description, id }) => {
    const client = useQueryClient();

    const titleRef = React.useRef(title);
    const descriptionRef = React.useRef(description);

    const { register, handleSubmit } = useForm<inputI>({
        defaultValues: {
            title: titleRef.current,
            description: descriptionRef.current,
        },
        shouldUnregister: false,
    });

    React.useEffect(() => {
        titleRef.current = title;
        descriptionRef.current = description;
    }, [title, description]);

    const [state, setState] = React.useState(true);
    const { mutate, isPending } = useDeleteTodo();
    const { mutate: mutateUpdate, isPending: isPendingUpdate } = useEditTodo();

    const saveItem = (data: inputI) => {
        mutateUpdate(
            { ...data, id },
            {
                onSuccess: () => {
                    client.invalidateQueries({ queryKey: ["todo_list"] });
                    setState(!state);
                    toast.success("success", { position: "top-center" });
                },
            }
        );
    };

    const deleteItem = () => {
        mutate(id as number, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ["todo_list"] });
                toast.success("success", { position: "top-center" });
            },
        });
    };
    console.log("+++");
    return (
        <div className="border border-gray-500 p-[10px]">
            {state ? (
                <>
                    <h3>Title: {title}</h3>
                    <p className="pb-[10px]">Description: {description}</p>
                    <button
                        onClick={deleteItem}
                        disabled={isPending}
                        className="px-4 py-1 rounded-2xl bg-red-500 text-white"
                    >
                        {!isPending ? "Delete" : "Loading..."}
                    </button>
                    <button
                        onClick={() => setState(!state)}
                        className="px-4 py-1 rounded-2xl bg-yellow-500 text-white ml-1"
                    >
                        Edit
                    </button>
                </>
            ) : (
                <form onSubmit={handleSubmit(saveItem)}>
                    <input
                        type="text"
                        className="p-[5px] mb-[10px] border"
                        {...register("title", {
                            required: "Title is required",
                            minLength: {
                                value: 3,
                                message:
                                    "Title must be at least 3 characters long",
                            },
                        })}
                    />
                    <input
                        type="text"
                        className="p-[5px] mb-[10px] border"
                        {...register("description", {
                            required: "Description is required",
                            minLength: {
                                value: 5,
                                message:
                                    "Description must be at least 5 characters long",
                            },
                        })}
                    />
                    <button
                        type="submit"
                        disabled={isPendingUpdate}
                        className="px-4 py-1 rounded-2xl bg-green-500 text-white"
                    >
                        {!isPendingUpdate ? "Save" : "Loading..."}
                    </button>
                </form>
            )}
        </div>
    );
};
