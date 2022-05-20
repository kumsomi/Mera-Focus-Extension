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
            <main className="main-bar">
            <div className="onboarding-head">Hey! What's your name?</div>
            <input type="text" className="onboarding-input "
            placeholder="Your name please!"
            onChange={(e)=>{
                setName(e.target.value);
            }}
            onKeyUp={(e) => {
                saveName(e);
            }}
            />
            </main>
        </div>
    )
}
export {UserOnboarding};