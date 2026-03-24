import { useState } from "react";
import ThemeToggle from "../ThemToggle/ThemToggle";
import "./Navbar.css";

const Navbar = ({ searchImg, search, discripton, img, setCity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCity(inputValue); // نرسل اسم المدينة

      setInputValue(""); // نفرغ الحقل
    }
  };

  return (
    <nav className="Nav-bar">
      <ThemeToggle />

      <div className="search">
        <img src={searchImg} alt="" />

        <input
          type="text"
          placeholder={search}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="logo">
        <img src={img} alt="" />
        <p>{discripton}</p>
      </div>
    </nav>
  );
};

export default Navbar;
