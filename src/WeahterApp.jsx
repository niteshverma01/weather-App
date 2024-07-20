import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 48.5,
    humidity: 64,
    temp: 31.58,
    tempMax: 31.58,
    tempMin: 31.58,
    weather: "overcast clouds",
  });
  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App By Nitesh</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
