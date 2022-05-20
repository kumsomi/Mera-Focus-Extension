import { useTime } from "../Context/TimeContext";

function Clock(){
    const {displayTime}=useTime();
    return (
        <div className="clock">
            <p>{displayTime}</p>
        </div>
    )
}
export {Clock};