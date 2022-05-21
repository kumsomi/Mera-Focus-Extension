import { useState } from "react";

export function Logout(){
    const [logout, setLogout] = useState(false);
    return(
        <div className="logout">
            <button className="floating-btn"onClick={() => setLogout((prev) => !prev)}>
                <span className="floating-btn-icon">
                    <i className="fas fa-cog"></i>
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