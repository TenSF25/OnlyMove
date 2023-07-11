import { useEffect, useState } from "react";
import axios from 'axios'

import './Home.css'
import Weather from "../Weather.jsx";

function Home() {

    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [d, setDay] = useState("")
    const [m, setMonth] = useState("")
    const [y, setYear] = useState("")
    const [time, setTime] = useState(Boolean)
    const [iconId, setIconId] = useState(Boolean)
    const [code, setCode] = useState(Number);
    const [timeOfDay, setTimeOfDay] = useState("");

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
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Finlandia`)
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

            const time = date.substr(11)
            setTime(time)

            const iconId = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64".length);
            setIconId(iconId);

            let timeOfDay = "day";

            const code = data.current.condition.code;
            setCode(code);

            if(!data.current.is_day) {
                timeOfDay = "night";
            }

            setTimeOfDay(timeOfDay);
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
        {code == 1000 ? (
            <div className="weather-app" style={{backgroundImage: `url(/src/assets/images/${timeOfDay}/clear.jpg)`}}>
            <Weather/>
        </div>
        ) : (
            (code == 1003 ||
                code == 1006 ||
                code == 1009 ||
                code == 1030 ||
                code == 1069 ||
                code == 1087 ||
                code == 1135 ||
                code == 1273 ||
                code == 1276 ||
                code == 1279 ||
                code == 1282) ? (
                    <div className="weather-app" style={{backgroundImage: `url(/src/assets/images/${timeOfDay}/cloudy.jpg)`}}>
                        <Weather/>
                    </div>
                ) : (
                    (   code == 1063 ||
                        code == 1069 ||
                        code == 1072 ||
                        code == 1150 ||
                        code == 1153 ||
                        code == 1180 ||
                        code == 1183 ||
                        code == 1186 ||
                        code == 1189 ||
                        code == 1192 ||
                        code == 1195 ||
                        code == 1204 ||
                        code == 1207 ||
                        code == 1240 ||
                        code == 1243 ||
                        code == 1246 ||
                        code == 1249 ||
                        code == 1252) ? (
                            <div className="weather-app" style={{backgroundImage: `url(/src/assets/images/${timeOfDay}/rainy.jpg)`}}>
                                <Weather/>
                            </div>
                        ) : (<div className="weather-app" style={{backgroundImage: `url(/src/assets/images/${timeOfDay}/snowy.jpg)`}}>
                                <Weather/>
                            </div>)
                )
        )}
        </>
    )
}

export default Home;

//Primer
//code == 1003 ||
// code == 1006 ||
// code == 1009 ||
// code == 1030 ||
// code == 1069 ||
// code == 1087 ||
// code == 1135 ||
// code == 1273 ||
// code == 1276 ||
// code == 1279 ||
// code == 1282

//Segundo
// code == 1063 ||
// code == 1069 ||
// code == 1072 ||
// code == 1150 ||
// code == 1153 ||
// code == 1180 ||
// code == 1183 ||
// code == 1186 ||
// code == 1189 ||
// code == 1192 ||
// code == 1195 ||
// code == 1204 ||
// code == 1207 ||
// code == 1240 ||
// code == 1243 ||
// code == 1246 ||
// code == 1249 ||
// code == 1252