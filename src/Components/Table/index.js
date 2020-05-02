import React, { useEffect, useState } from "react";
import { fetchCountryDetail } from "../../api";
import styles from "./Table.module.css";

export default function Table({ country }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getDetailedInfo() {
            const data = await fetchCountryDetail(country);
            setData(data);
        }
        getDetailedInfo();
    }, [country]);

    return (
        <div>
            {data && (
                <table className={styles.infotable}>
                    <thead>
                        <th>Province State</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((detailed) => (
                                <tr key={detailed.provinceState}>
                                    <td>
                                        {detailed.provinceState
                                            ? detailed.provinceState
                                            : country}
                                    </td>
                                    <td>{detailed.confirmed}</td>
                                    <td>{detailed.active}</td>
                                    <td>{detailed.deaths}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
