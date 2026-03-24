import "./ThemToggle.css";
import { useState } from "react";
function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <>
      <div className="them-toggell">
        <div className="toggle" onClick={toggleTheme}>
          <div className={dark ? "circle move" : "circle"}></div>
        </div>
        <div>{dark ? <h3>Dark Mode</h3> : <h3>Light Mode</h3>}</div>
      </div>
    </>
  );
}

export default ThemeToggle;
