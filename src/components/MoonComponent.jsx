import React, { memo } from "react";
import "../index.css";

const MoonComponent = ({ toggleTheme, darkMode }) => {
  const themeClass = darkMode ? "dark" : "light";

  return (
    <div id="bdy">
      <div id="main" onClick={toggleTheme} className={themeClass}>
        <a href="#">
          <div id="moon">
            {[1, 2].map((num) => (
              <div key={num} id={`moonspot${num}`} className="spots"></div>
            ))}
          </div>
        </a>
        <a href="#bdy">
          <div id="cover"></div>
        </a>
      </div>
    </div>
  );
};

export default memo(MoonComponent);
