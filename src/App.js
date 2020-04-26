import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import CoronaLogo from "./imgs/covid.jpg";

export default function App() {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState("");

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        setData(fetchedData);
        setCountry(country);
    };

    useEffect(() => {
        async function getInfo() {
            const data = await fetchData();
            setData(data);
        }
        getInfo();
    }, []);

    return (
        <div className={styles.container}>
            <img src={CoronaLogo} alt='' height={150} />
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart country={country} data={data} />
        </div>
    );
}
