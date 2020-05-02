import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        // const response = await axios.get(url);
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(changeableUrl);
        //destruct info from destructed data
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };
        return modifiedData;
    } catch (err) {
        console.log(err);
    }
};
export const fetchCountryDetail = async (country) => {
    try {
        const { data } = await axios.get(
            `https://covid19.mathdro.id/api/countries/${country}/confirmed`
        );

        return data;
    } catch (err) {
        console.error(err);
    }
};

export const fetchDataDaily = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (err) {
        console.log(err);
    }
};

export const fetchCountries = async () => {
    try {
        const {
            data: { countries },
        } = await axios.get(`${url}/countries`);
        const modifiedData = countries.map((country) => country);
        return modifiedData;
    } catch (err) {
        console.log(err);
    }
};
