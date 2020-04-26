import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        // const response = await axios.get(url);
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(url);
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

export const fetchDataDaily = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
