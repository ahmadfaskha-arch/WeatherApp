export const getWeatherIcon = (weather) => {
  if (!weather || !weather.main) return "/assets/img/clear.svg";

  const main = weather.main.toLowerCase();
  const icon = weather.icon; // مثل "01d" أو "01n"

  const isNight = icon?.includes("n");

  // 🌞☁️🌧❄️ حالات الطقس
  if (main.includes("clear")) {
    return isNight
      ? "/assets/img/moon.svg"     // 🌙 ليل
      : "/assets/img/clear.svg";   // ☀️ نهار
  }

  if (main.includes("cloud")) {
    return isNight
    ?"/assets/img/mist.svg"
    :"/assets/img/clouds.svg"
    
  }

  if (main.includes("rain") || main.includes("drizzle")) {
    return isNight
    ?"/assets/img/rain-night.svg"
    :"/assets/img/drizzle.svg"
  }

  if (main.includes("snow")) {
    return "/assets/img/snow.svg";
  }

  if (main.includes("thunderstorm")) {
    return "/assets/img/strom.svg";
  }

  if (main.includes("mist") || main.includes("fog") || main.includes("haze")) {
    return "/assets/img/mist.svg";
  }

  // fallback
  return "/assets/img/clear.svg";
};