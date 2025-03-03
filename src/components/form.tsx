import { useForm } from "react-hook-form";
import { useCreateTodo } from "../service/mutation/useCreateTodo";
import { useQueryClient } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toast uchun stil

export interface inputI {
    title: string;
    description: string;
    id?: number;
}

export const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<inputI>();
    const { mutate, isPending } = useCreateTodo();
    const client = useQueryClient();

    const submit = (data: inputI) => {
        mutate(data, {
            onSuccess: () => {
                reset();
                client.invalidateQueries({ queryKey: ["todo_list"] });
                toast.success("Todo added successfully!", {
                    position: "top-center",
                });
            },
            onError: (error) => {
                toast.error(error.message, { position: "top-center" });
            },
        });
    };

    return (
        <div className="container">
            <ToastContainer />

            <form onSubmit={handleSubmit(submit)} className="pt-[20px]">
                <div className="flex flex-col gap-2">
                    <div>
                        <input
                            className="py-[5px] px-[5px] border"
                            type="text"
                            placeholder="Title"
                            {...register("title", {
                                required: "Title is required",
                                minLength: {
                                    value: 3,
                                    message:
                                        "Title must be at least 3 characters long",
                                },
                            })}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            className="py-[5px] px-[5px] border"
                            type="text"
                            placeholder="Description"
                            {...register("description", {
                                required: "Description is required",
                                minLength: {
                                    value: 5,
                                    message:
                                        "Description must be at least 5 characters long",
                                },
                            })}
                        />
                        {errors.description && (
                            <p className="text-red-500 text-sm">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="border py-[5px] px-[20px] bg-green-500 text-white rounded-2xl"
                            disabled={isPending}
                        >
                            {isPending ? "Adding..." : "Add"}
                        </button>
                        <button
                            type="reset"
                            className="border py-[5px] px-[20px] bg-red-500 text-white rounded-2xl"
                            onClick={() => reset()}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
