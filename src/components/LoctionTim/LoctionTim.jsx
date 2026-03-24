import { useState, useEffect } from "react";
import "./LoctionTim.css";
import WetherLeft from "../WetherLeft/WetherLeft";
import WetherRight from "../WetherRight/WetherRight";
import WetherIcon from "../WetherIcon/WetherIcon";

const LoctionTim = ({ city }) => {
  const [now, setNow] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);

  // تحديث الوقت كل دقيقة
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // جلب الطقس حسب المدينة
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=585b17d788adce8d36c4fd34243f2e85`,
        );
        const data = await res.json();

        setWeatherData(data);
      } catch (error) {
        console.error("Error weather:", error);
      }
    };

    fetchWeather();
  }, [city]);

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="wether-continer">
      <div className="main-details">
        <div className="loction">
          <h3>{city}</h3>
        </div>

        <div className="daet-tim">
          <h2>{time}</h2>
          <p>{date}</p>
        </div>
      </div>

      <div className="wether-details">
        <WetherLeft data={weatherData} />
        <WetherIcon data={weatherData} />
        <WetherRight data={weatherData} />
      </div>
    </div>
  );
};

export default LoctionTim;
