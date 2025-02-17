import { nanoid } from "nanoid";
import React from "react";
import { request } from "../config/request";
import { getAllData } from "../App";

export const Form = ({ setData }) => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const submit = (e) => {
        e.preventDefault();
        if (title && description) {
            request.post("todos", { title, description });
            getAllData(setData);
        }
        setTitle("");
        setDescription("");
    };
    return (
        <div>
            <form onSubmit={submit} className="flex gap-5">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-[1px] pl-2"
                    type="text"
                    placeholder="title"
                />
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border-[1px] pl-2"
                    type="text"
                    placeholder="description"
                />
                <button
                    className="border-[1px] p-2 rounded-2xl cursor-pointer"
                    type="submit"
                >
                    Add
                </button>
                <button
                    className="border-[1px] p-2 rounded-2xl cursor-pointer"
                    type="reset"
                >
                    Reset
                </button>
            </form>
        </div>
    );
};
