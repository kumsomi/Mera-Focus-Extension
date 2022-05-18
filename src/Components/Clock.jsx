import { useTime } from "../Context/TimeContext";
import { useState, useEffect } from "react";

function Clock(){
    // const time = new Date();
    // const hour = time.getHours();
    // const minute = time.getMinutes();
    // const minuteFormatting = minute / 10 < 1 ? `0${minute}` : minute;
    // const second = time.getSeconds();
    // const secondFormatting = second / 10 < 1 ? `0${second}` : second;
    // 
    const {displayTime}=useTime();
    return (
        <div>
            <h1>Clock : </h1><span>{displayTime}</span>
        </div>
    )
}
export {Clock};