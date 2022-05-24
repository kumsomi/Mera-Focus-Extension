import { useState } from "react";
import {AiTwotoneSetting} from "react-icons/ai";

export function Logout(){
    const [logout, setLogout] = useState(false);
    return(
        <div className="logout">
            <button className="floating-btn"onClick={() => setLogout((prev) => !prev)}>
                <span className="floating-btn-icon">
                <AiTwotoneSetting/>
                </span>
            </button>
          {logout ? (
            <div
              className="logout-menu"
              onClick={() => {
                localStorage.removeItem("username");
                window.location.reload(false);
              }}
            >
              Change your name
            </div>
          ) : (
            ""
          )}
        </div>
    );
}