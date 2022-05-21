import './App.css';
import {Home, UserOnboarding} from "./Components/index"; 
import { useState, useEffect } from "react";
import { useTheme } from "./Context/ThemeContext";


function App() {
  const [userState, setUserState] = useState(false);
  
  useEffect(() => {
    const userName = localStorage.getItem("username");
    setUserState(userName);
  }, [userState]);

  const { wallpaper } = useTheme();
  return (
    <div className="App img-responsive"
    style={{
      backgroundImage: `url("${wallpaper}")`,
    }}
  >
    { userState ? <Home/>:<UserOnboarding/>}
    </div>
  );
}

export default App;
