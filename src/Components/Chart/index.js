import React, { useEffect, useState } from "react";
import { fetchDataDaily } from "../../api";

export default function Chart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getInfo() {
            const data = await fetchDataDaily();
            console.log(data);
            setData(data);
        }
        getInfo();
    }, []);
    return <div></div>;
}
