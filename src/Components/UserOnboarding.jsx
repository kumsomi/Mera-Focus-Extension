import { useState } from "react";

function UserOnboarding(){
    const [name, setName] = useState("");
    function saveName(e){
        if(e.key === "Enter"){
            localStorage.setItem("username", name);
            window.location.reload(false);
        }
    }
    return (
        <div>
            <h1>UserOnboarding</h1>
            <h1>Hey! What's your name?</h1>
            <input type="text" 
            placeholder="Your name please!"
            onChange={(e)=>{
                setName(e.target.value);
            }}
            onKeyUp={(e) => {
                saveName(e);
            }}
            />
        </div>
    )
}
export {UserOnboarding};