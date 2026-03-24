import "./WetherRight.css";
const WetherRight = ({ data }) => {
  if (!data) return <p>Loading...</p>;
  return (
    <div className="wether-ri">
      <div className="info">
        <img src="/assets/img/humidity1.png" alt="Humidity" />
        <p>{data.main.humidity}%</p>
        <span>Humidity</span>
      </div>

      <div className="info">
        <img src="/assets/img/wind1.png" alt="Wind" />
        <p>{data.wind.speed} km/h</p>
        <span>Wind Speed</span>
      </div>

      <div className="info">
        <img src="/assets/img/pressurewhite1.png" alt="Pressure" />
        <p>{data.main.pressure} hPa</p>
        <span>Pressure</span>
      </div>
    {/* اذا كانت الuv موجودة اظهرا غير ذلك لا تظهر شيء */}
    {data.uvi && (
  <div className="info">
    <img src="/assets/img/uvwhite1.png" alt="UV" />
    <p>{data.uvi}</p>
    <span>UV</span>
  </div>
)}
    </div>
  );
};

export default WetherRight;