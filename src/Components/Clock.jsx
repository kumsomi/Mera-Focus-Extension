import { useTime } from "../Context/TimeContext";

function Clock(){
    const {displayTime, displayDate}=useTime();
    return (
        <div >
            <p className="clock">{displayTime}</p>
            <p className="date">{displayDate}</p>
        </div>
    )
}
export {Clock};