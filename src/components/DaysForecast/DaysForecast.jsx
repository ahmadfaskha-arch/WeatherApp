import { useState, useEffect } from "react";
import ForecastList from "../ForecastItem/ForecastList";
import "./DaysForecast.css";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

const DaysForecast = ({ city }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    if (!city) return;
    const fetchForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=585b17d788adce8d36c4fd34243f2e85`,
        );
        const data = await res.json();

        // هنا نجمع أول عنصر لكل يوم من الـ 5 أيام
        const tempMap = {};
        data.list.forEach((item) => {
          const date = item.dt_txt.split(" ")[0]; // yyyy-mm-dd
          if (!tempMap[date]) tempMap[date] = item;
        });

        const daily5 = Object.values(tempMap).slice(0, 5);
        setDailyData(daily5);
      } catch (err) {
        console.error("Error fetching 5-day forecast:", err);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <div className="forecast">
      <div className="daysforecast">
        <h2>5Days Forecast:</h2>
        {dailyData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          dailyData.map((item, index) => (
            <ForecastList
              key={index}
              item={item}
            />
          ))
        )}
      </div>
      <HourlyForecast city={city} />
    </div>
  );
};

export default DaysForecast;
