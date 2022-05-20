import './App.css';
import { Home, UserOnboarding } from './Components/index';
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
      <img src="" alt="" />
      {/* <img src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNzA4NTI3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000" alt="night" /> */}
    </div>
  );
}

export default App;
