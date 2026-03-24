import { getWeatherIcon } from "../../data/getWeatherIcon";
import "./HourlyForecastList.css";
const HourlyForecastList = ({ item }) => {
  if (!item) return null;

  return (
    <div className="hourly-list">
      <h3>
        {new Date(item.dt_txt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h3>

      {/* 🔥 هون التعديل المهم */}
      <img
        src={getWeatherIcon(item.weather[0])}
        width={"60px"}
        height={"60px"}
        alt=""
      />

      <p>{Math.round(item.main.temp)}°C</p>

      <img src="/assets/img/navigation 1.png" alt="" />

      <p>{item.wind.speed} km/h</p>
    </div>
  );
};

export default HourlyForecastList;
