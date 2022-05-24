import {Clock, Greeting, Focus,Quote, Weather, GoogleLink, Logout, Todo} from "../Components/index"; 
// import { Calendars } from "./Calendars";
export function Home(){
    return(
        <div className="primary-color">
        <header className=" header-bar">
          <GoogleLink/>
          <Weather/> 
        </header>
        <main>
          <div className="main-bar">
          <Clock/>
          <Greeting className="greeting"/>
          <Focus/>
          </div>
          {/* <Quote/> */}
        </main>
        <footer className="footer-bar">
          <Logout/>
          <Quote/>
          <Todo/>
          {/* <Calendars/> */}
        </footer>
      </div>
    );
}