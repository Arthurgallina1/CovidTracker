import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getInfo() {
            const data = await fetchData();
            setData(data);
        }
        getInfo();
    }, []);

    return (
        <div className={styles.container}>
            <Cards data={data} />
            <CountryPicker />
            <Chart />
        </div>
    );
}
