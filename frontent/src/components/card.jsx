import React from "react";
import { request } from "../config/request";
import { getAllData } from "../App";

export const Card = ({ item, setData }) => {
    const deleteItem = () => {
        request.delete(`todos/${item.id}`).then((res) => {
            getAllData(setData);
        });
    };

    const editItem = () => {
        const newTitle = prompt("Enter title", item.title);
        const newDescription = prompt("Enter description", item.description);

        request
            .patch(`todos/${item.id}`, {
                title: newTitle,
                description: newDescription,
            })
            .then((res) => {
                getAllData(setData);
            });
    };

    return (
        <div className="border-2 p-[10px] flex justify-between">
            <div>
                <h2>Title: {item.title}</h2>
                <h2>Description: {item.description}</h2>
            </div>
            <div className="flex gap-[10px]">
                <button
                    onClick={deleteItem}
                    className="border-[1px] rounded-2xl p-[10px] cursor-pointer bg-red-500"
                >
                    Delete
                </button>
                <button
                    onClick={editItem}
                    id={item.id}
                    className="border-[1px] rounded-2xl p-[10px] cursor-pointer bg-yellow-500"
                >
                    Edit
                </button>
            </div>
        </div>
    );
};
