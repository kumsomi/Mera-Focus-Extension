import { useState } from 'react';
import Calendar from 'react-calendar';
export function Calendars(){
  const [calendar, setCalendar]=useState(false)
    return(
        <div className="calendar">
            <button className="floating-btn" onClick={() => setCalendar((prev) => !prev)}>
                <span className="floating-btn-icon">
                    <i class="fas fa-calendar-alt"></i>    
                </span>
            </button>
            { calendar? (<Calendar/>): ("")}
          </div>   
    );
}