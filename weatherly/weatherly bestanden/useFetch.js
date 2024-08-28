import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (param) => {
    const [data, setData] = useState();

    useEffect(() => {
        // declare the data fetching function
        const apiKey = process.env.REACT_APP_API_KEY;

        let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Alkmaar&aqi=no`;
        axios
            .get(url)
            .then((response) => { setData(response.data); })
            .catch((error) => console.log(error));
    }, [param]);

    return data;
};

const useFetchWithQuery = (param, query) => {
    const [data, setData] = useState();

    useEffect(() => {        
        // declare the data fetching function
        const apiKey = process.env.REACT_APP_API_KEY;
        if ( query != null ) 
        {
        
        let url = `${param}?key=${apiKey}&${query}`;
        axios
            .get(url)
            .then((response) => { setData(response.data); })
            .catch((error) => console.log(error));
        }}, [param,query]);
    

    return data;
};

export { useFetch as default, useFetchWithQuery };