import { useState, useEffect } from "react";
import { useTime } from "../Context/TimeContext";

function Greeting(){
    const { partOfDay } = useTime();
    
    const [greeting, setGreeting] = useState("");
    const username = localStorage.getItem("username");
    const displayName = username.charAt(0).toUpperCase() + username.slice(1);
    useEffect(() => {
        console.log(partOfDay);
        switch(partOfDay){
            case 'morning':
            case 'afternoon':
            case 'evening':
            case 'night':
                setGreeting(`Good ${partOfDay}`);
                break;
            default: 
            setGreeting("It was a good day, Have a Great Night");
        }
    // eslint-disable-next-line 
    }, [partOfDay]);

    return (
        <div>
            <div className="greeting">
            {`${greeting}! ${displayName}` }
            </div> 
        </div>
    )
}
export {Greeting};