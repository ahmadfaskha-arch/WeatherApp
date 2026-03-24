import { useState } from "react";
import "./App.css";
import DaysForecast from "./components/DaysForecast/DaysForecast";
import LoctionTim from "./components/LoctionTim/LoctionTim";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [city, setCity] = useState("دمشق");

  return (
    <>
      <Navbar
        searchImg="/assets/img/searchicon.png"
        search="Search for your preferred city..."
        discripton="Current Location"
        img="/assets/img/lognavbar.png"
        setCity={setCity}
      />

      <LoctionTim city={city} />
      <DaysForecast city={city} />
    </>
  );
}

export default App;

// coords={coords}
// هي كانت مودودة عندي استاعاء لوكيشن تايم
