import { useState } from "react";

export function ShowFocusTab(props){
    const focusForToday = props.todaysFocus;
    const [focusStatus, setFocusStatus] = useState(false);

    function editFocus() {
        localStorage.removeItem("todays-focus");
        // window.location.reload(false);
    }

    return (
        <div>
        <section className="focus-tab">
            <h1 className="underline">Today</h1>
            <input className="focus-check" type="checkbox" onChange={() => setFocusStatus(!focusStatus)} />
            
            <span className="focus-text"
            style={
                focusStatus
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
            >
             I will {focusForToday}
            </span>
            <button className="floating-btn" onClick={editFocus}>
            <span className="floating-btn-icon">
                <i className="fas fa-pen"></i>
            </span>
        </button>
        </section>
        {focusStatus ? (
            <div className="focus-status">Yes, You did it</div>
        ) : (
            <div className="focus-status">You can do it. Keep working</div>
        )}
        </div>
    );
}