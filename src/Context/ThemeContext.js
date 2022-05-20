import { createContext, useContext, useState, useEffect } from "react";
import { useTime } from "./TimeContext";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const { partOfDay } = useTime();
  const [wallpaper, setWallpaper] = useState("");

  function changeWallpaper() {
    setWallpaper(
      `./assets/images/${partOfDay}/${partOfDay}-${String(Math.floor(Math.random() * 4) + 1)}.jpg`
    );
  }

  useEffect(() => {
    changeWallpaper();
  }, [partOfDay]);

  return (
    <ThemeContext.Provider value={{ wallpaper }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };