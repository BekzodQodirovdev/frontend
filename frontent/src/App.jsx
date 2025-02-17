import React from "react";
import { Form } from "./components/form";
import { Card } from "./components/card";
import { request } from "./config/request";

export function getAllData(setData) {
    request.get("todos").then((res) => {
        setData(res.data);
    });
}

function App() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        request.get("todos").then((res) => {
            setData(res.data);
        });
    }, []);
    return (
        <div className="container">
            <div className="flex gap-[20px] mt-[20px]">
                <Form setData={setData} />
            </div>
            <div className="flex flex-col gap-2 mt-[20px]">
                {data.map((item) => (
                    <Card key={item.id} item={item} setData={setData} />
                ))}
            </div>
        </div>
    );
}

export default App;
