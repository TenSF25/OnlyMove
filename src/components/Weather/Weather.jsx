import { useEffect, useState } from "react";
import axios from 'axios'

import './Weather.css'

function Weather() {

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [d, setDay] = useState("");
    const [m, setMonth] = useState("");
    const [y, setYear] = useState("");
    const [time, setTime] = useState(Boolean);
    const [iconId, setIconId] = useState(Boolean);

    function dayOfTheWeek(day, month, year) {
        const weekday = [
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes"
        ];
        return weekday[new Date(`${day}/${month}/${year}`).getDay()];
    }

    useEffect(() => {
        const apiKey = "cac6e78e6c694e4982a202002230707";
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Ushuaia`)
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setWeatherData(data)

            const date = data.location.localtime

            const y = parseInt(date.substr(0, 4))
            setYear(y);

            const m = parseInt(date.substr(5, 2))
            setMonth(m);

            const d = parseInt(date.substr(8, 2))
            setDay(d);

            const iconId = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64".length);
            setIconId(iconId);

            const time = date.substr(11)

            setTime(time);
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() =>
            setLoading(false)
        );
    }, [])

    if(loading) return "Loading..."

    return(
        <>
            <div className="weather-container">
                <div className="container2">
                    <div>
                        <h1 className="temp">{weatherData.current.temp_c}°</h1>
                        <div className="city-time">
                            <h1 className="name">{weatherData.location.name}</h1>
                            <small>
                                <span className="time">{time}</span>
                                <span> - </span>
                                <span className="date">{dayOfTheWeek(d, m, y)} {d}, {m} {y}</span>
                            </small>
                        </div>
                        <div className="weather">
                            <img src={`/src/assets/icons/64x64/${iconId}`}  className="icon" alt="icon" style={{width: "50px", height: "50px"}}/>
                            <span className="condition">{weatherData.current.condition.text}</span>
                        </div>
                    </div>
                </div>
                <div className="weather-details">
                    <ul className="details">
                        <h4>Detalles del clima</h4>
                        <li>
                            <span>Nubes: </span>
                            <span className="cloud">{weatherData.current.cloud}%</span>
                        </li>
                        <li>
                            <span>Humedad: </span>
                            <span className="humidity">{weatherData.current.humidity}%</span>
                        </li>
                        <li>
                            <span>Viento: </span>
                            <span className="wind">{weatherData.current.wind_kph}km/h</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Weather;