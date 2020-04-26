import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

export default function CountryPicker({ handleCountryChange }) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function getCountries() {
            const data = await fetchCountries();
            setCountries(data);
        }
        getCountries();
    }, []);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defaultValue=''
                onChange={(e) => handleCountryChange(e.target.value)}
            >
                <option value=''>Global</option>
                {countries.map((country, i) => (
                    <option key={i} value={country.name}>
                        {country.name}{" "}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
}
