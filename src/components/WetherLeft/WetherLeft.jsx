import "./WetherLeft.css";
const WetherLeft = ({ data }) => {
  if (!data) return <p>Loading...</p>;
  
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="wether-le">
      <div className="temp">
        <h1>{Math.round(data.main.temp)}°C</h1>
        <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
      </div>

      <div className="sun">
        <div className="sun1">
          <img src="/assets/img/sunrise1.png" alt="Sunrise" />
          <p>Sunrise {sunrise}</p>
        </div>

        <div className="sun2">
          <img src="/assets/img/sunset2.png" alt="Sunset" />
          <p>Sunset {sunset}</p>
        </div>
        
      </div>
    </div>
  );
};

export default WetherLeft;