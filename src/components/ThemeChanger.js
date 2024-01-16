import React, { useState, useEffect } from "react";

const ThemeChanger = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <select
        className="select select-primary text-primary text-xl w-full max-w-xs text-center"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {themes.map((themeOption) => (
          <option className="my-12" data-theme={themeOption} key={themeOption} value={themeOption}>
            {themeOption}
          </option>
        ))}
      </select>
    </>
  );
};

export default ThemeChanger;
