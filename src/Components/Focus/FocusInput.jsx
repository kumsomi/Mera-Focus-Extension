import { useState } from "react";

export function FocusInput(){
    const [focus, setFocus]=useState("");
    function saveFocus(e){
        if(e.key === "Enter"){
            localStorage.setItem("todays-focus", focus);
        }
    }
    return(
        <div>
            <input type="text" className="focus-input"
            placeholder="What's your todays Focus?"
            onChange={(e)=>{
                setFocus(e.target.value);
            }}
            onKeyUp={(e)=>{
                saveFocus(e);
            }}
            />
        </div>
    );
}