import { useState, createContext, useContext } from "react";

const defaultTime= new Date();
const TimeContext = createContext(defaultTime);
const newTime=new Date();

//british time--> en-GB -->24hrs format
const nowTime = newTime.toLocaleTimeString("en-GB");
const hr=Number(nowTime.slice(0,2));

function changePartOfDay(){
    //checking with the hour hand by taking the first 2 letters out 13:32:29 --> slice(0,2)--> 13
    //5am to 12pm -> morning
    if(hr>=4 && hr<12){
        return "morning";
    }
    if(hr>=12 && hr<16){
        return "afternoon";
    }
    if(hr>=16 && hr<19){
        return "evening";
    }
    else {
        return "night";
    }
}
    function TimeProvider({ children }) {
        const [displayDate, setDisplayDate] = useState("");
        const [displayTime, setDisplayTime] = useState("");
        const [partOfDay, setPartOfDay] = useState(changePartOfDay);
      
        setInterval(() => {
          const newTime = new Date();
          setDisplayTime(newTime.toLocaleTimeString("en-GB"));
          setPartOfDay(changePartOfDay());
          setDisplayDate(newTime.toLocaleDateString("en-GB").replaceAll('/','-'));
        }, 1000);
      
        return (
          <TimeContext.Provider value={{ displayTime, partOfDay, displayDate }}>
            {children}
          </TimeContext.Provider>
        );
      }

      const useTime = () => useContext(TimeContext);

      
export { TimeProvider, useTime };