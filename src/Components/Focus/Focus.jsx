import { FocusInput } from "./FocusInput";
import { ShowFocusTab } from "./ShowFocusTab";

function Focus(){
    
    const todaysFocus= localStorage.getItem("todays-focus");
   
    return (
        <div>
            {(todaysFocus !==null)
            ?
            <ShowFocusTab todaysFocus={todaysFocus}/>
            :
            <FocusInput/>
            }
        </div>
    )
}
export {Focus};