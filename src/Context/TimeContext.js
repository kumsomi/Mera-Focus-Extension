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
    if(hr>=12 && hr<17){
        return "afternoon";
    }
    if(hr>=17 && hr<19){
        return "evening";
    }
    if(hr>=19 && hr>4){
      console.log("night");
        return "night";
    }
}
    function TimeProvider({ children }) {
        const [displayTime, setDisplayTime] = useState("");
        const [partOfDay, setPartOfDay] = useState(changePartOfDay);
      
        setInterval(() => {
          const newTime = new Date();
          setDisplayTime(newTime.toLocaleTimeString("en-GB"));
          setPartOfDay(changePartOfDay());
        }, 1000);
      
        return (
          <TimeContext.Provider value={{ displayTime, partOfDay }}>
            {children}
          </TimeContext.Provider>
        );
      }

      const useTime = () => useContext(TimeContext);

      
export { TimeProvider, useTime };