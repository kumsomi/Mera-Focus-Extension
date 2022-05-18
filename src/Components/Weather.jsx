import axios from "axios";
import { useState, useEffect } from "react";

function Weather(){
    const KEY= process.env.REACT_APP_WEATHER_KEY;
    const key="57269ffb86d244a0849150422221405"
    const url="https://api.weatherapi.com/v1/current.json";
    // const url=process.env.REACT_APP_WEATHER_KEY

    const [weatherInfo, setWeatherInfo] = useState({
        location: {
          name: "",
          region: "",
          country: "",
        },
        temperature: 0,
        icon: "",
      });
    
      useEffect(() => {
        getUserLocation();
      // eslint-disable-next-line
      }, []);
      const success = (position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
      };
    
      const error = () => {
        getWeather();
      };
    
      const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error);
      };
    
      async function getWeather(latitude, longitude) {
        let apiReq = "";
        latitude && longitude
        ? (apiReq = `${url}?key=${key}&q=${latitude},${longitude}&aqi=yes`)
        : (apiReq = `${url}?key=${key}&q=Bangalore&aqi=yes`);
        try {
          const res = await axios.get(apiReq);
          setWeatherInfo({
            location: {
              name: res.data.location.name,
              region: res.data.location.region,
              country: res.data.location.country,
            },
            temperature: res.data.current.temp_c,
            icon: res.data.current.condition.icon,
          });
        } catch (error) {
          console.log(error);
        }
      }
    return (
        <div>
            <h1>Weather</h1>
            <div className="weather">
                <img
                    src={weatherInfo.icon}
                    alt="weather-icon"
                    className="weather-icon"
                />
                <div className="weather-details">
                    <div className="weather-temperature">
                    {weatherInfo.temperature} &deg;
                    </div>
                    <div className="weather-location">
                    {weatherInfo.location.name}, {weatherInfo.location.region} ,
                    {weatherInfo.location.country}
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Weather};