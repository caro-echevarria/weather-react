import React from "react";
import axios from "axios";

export default function Weather () {

    function handleResponse(response) {
        alert (`The weather in Mexico City is ${Math.round(response.data.main.temp)}°C`);
    }

    let apiKey = "fc05c82742f2f3ebf4f9a474f1172d7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mexico City&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
<h2> Hello from Weather! </h2>);
}