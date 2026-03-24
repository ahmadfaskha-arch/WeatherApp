import { getWeatherIcon } from "../../data/getWeatherIcon";
import "./WetherIcon.css";

const WetherIcon = ({ data }) => {
  if (!data) return <p>Loading...</p>;

  return (
    <div className="weather-icon">
      <img src={getWeatherIcon(data.weather[0])} alt="Weather" />
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default WetherIcon;