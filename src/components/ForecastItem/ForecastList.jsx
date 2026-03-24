import { getWeatherIcon } from "../../data/getWeatherIcon";
import "./ForecastList.css";

const ForecastList = ({ item }) => {
  return (
    <div className="forecast-item">
      <img
        src={getWeatherIcon(item.weather[0])}
        width={"60px"}
        height={"60px"}
        alt=""
      />
      <h3>{Math.round(item.main.temp)}°C</h3>
      <p>{new Date(item.dt * 1000).toLocaleDateString("en-GB")}</p>
    </div>
  );
};

export default ForecastList;
