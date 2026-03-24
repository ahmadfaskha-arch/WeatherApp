import { useState, useEffect } from "react";
import HourlyForecastList from "../HourlyForecastList/HourlyForecastList";
import "./HourlyForecast.css";

const HourlyForecast = ({ city }) => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    if (!city) return;

    const fetchHourly = async () => {
      try {
        // نجيب forecast لمدة 5 أيام كل 3 ساعات
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=585b17d788adce8d36c4fd34243f2e85`,
        );
        const data = await res.json();

        // ناخذ أول 5 عناصر أو حسب الحاجة
        const hourly5 = data.list.slice(0, 5);
        setHourlyData(hourly5);
      } catch (error) {
        console.error("Error hourly forecast:", error);
      }
    };

    fetchHourly();
  }, [city]);

  return (
    <div className="hourly-forecast">
      <h2>Hourly Forecast:</h2>
      <div className="lists-for">
        {hourlyData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          hourlyData.map((item, index) => (
            <HourlyForecastList key={index} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default HourlyForecast;
